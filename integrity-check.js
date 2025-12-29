// integrity-check.js
// Run this script to validate all critical backend services and environment variables

require('dotenv').config({ path: '.env.local' });
const { Pool } = require('pg');
const axios = require('axios');

function checkEnvVars(vars) {
  let ok = true;
  vars.forEach((k) => {
    if (!process.env[k]) {
      console.error('Missing env:', k);
      ok = false;
    } else {
      console.log('OK env:', k);
    }
  });
  return ok;
}

async function checkDb() {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });
    const res = await pool.query('SELECT 1 as ok');
    if (res.rows[0].ok === 1) {
      console.log('OK: Database connection');
    } else {
      throw new Error('Unexpected DB result');
    }
    await pool.end();
  } catch (e) {
    console.error('DB connection failed:', e.message);
    return false;
  }
  return true;
}

async function checkB2() {
  try {
    const auth = await axios.get('https://api.backblazeb2.com/b2api/v2/b2_authorize_account', {
      headers: {
        Authorization: 'Basic ' + Buffer.from(process.env.B2_KEY_ID + ':' + process.env.B2_APPLICATION_KEY).toString('base64'),
      },
    });
    if (auth.data && auth.data.accountId) {
      console.log('OK: Backblaze B2 credentials');
      return true;
    }
    throw new Error('No accountId in B2 response');
  } catch (e) {
    console.error('Backblaze B2 check failed:', e.message);
    return false;
  }
}

async function main() {
  const envOk = checkEnvVars(['DATABASE_URL', 'B2_KEY_ID', 'B2_APPLICATION_KEY', 'B2_BUCKET_ID', 'NEXT_PUBLIC_ABLY_API_KEY']);
  const dbOk = await checkDb();
  const b2Ok = await checkB2();
  if (envOk && dbOk && b2Ok) {
    console.log('INTEGRITY CHECK PASSED');
    process.exit(0);
  } else {
    console.error('INTEGRITY CHECK FAILED');
    process.exit(1);
  }
}

main();

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";
import AdminJobsPage from "./page";

export default function AdminJobsProtected() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace("/admin/login");
        return;
      }
      // Fetch user profile from 'profiles' table (must have is_admin boolean)
      const { data, error } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", session.user.id)
        .single();
      if (error || !data?.is_admin) {
        router.replace("/admin/login");
        return;
      }
      setIsAdmin(true);
      setLoading(false);
    };
    checkAuth();
  }, [router]);

  if (loading) return <div>Loading...</div>;
  if (!isAdmin) return null;
  return <AdminJobsPage />;
}

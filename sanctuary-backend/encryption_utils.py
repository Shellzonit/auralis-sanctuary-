from cryptography.fernet import Fernet
import os

def get_fernet():
    key = os.environ.get('FERNET_KEY')
    if not key:
        raise ValueError('FERNET_KEY not set in environment')
    return Fernet(key.encode())

def encrypt(text: str) -> str:
    f = get_fernet()
    return f.encrypt(text.encode()).decode()

def decrypt(token: str) -> str:
    f = get_fernet()
    return f.decrypt(token.encode()).decode()

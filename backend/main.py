# Import FastAPI framework to build our API
from fastapi import FastAPI

# Import Supabase client to connect to our database
from supabase import create_client

# Import dotenv to load our secret keys from the .env file
from dotenv import load_dotenv

# Import os to read environment variables
import os

# This loads the .env file so we can access SUPABASE_URL and SUPABASE_KEY
load_dotenv()

# Create the FastAPI app instance
app = FastAPI()

# Read the Supabase credentials from the .env file
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Create the Supabase client — this is what talks to your database
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# Signup endpoint — creates a new user in Supabase Auth
@app.post("/signup")
async def signup(email: str, password: str):
    response = supabase.auth.sign_up({"email": email, "password": password})
    return response

# Login endpoint — checks credentials and returns a session token
@app.post("/login")
async def login(email: str, password: str):
    response = supabase.auth.sign_in_with_password({"email": email, "password": password})
    return response
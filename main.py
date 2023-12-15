from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import uvicorn

from utils import send_mail

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


class EmailModel(BaseModel):
    email: str


@app.post("/sub")
async def sub_endpoint(email: EmailModel):
    status = send_mail(email.email)
    if status:
        return {"success": True}

    return {"success": False}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8044)

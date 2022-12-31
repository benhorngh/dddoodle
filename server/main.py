import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from api import router

app = FastAPI()


def init_api():
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.include_router(router)


if __name__ == "__main__":
    init_api()
    uvicorn.run(app, host='localhost')

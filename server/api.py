from fastapi import APIRouter

router = APIRouter(prefix="/api")


@router.get('/health', tags=['general'])
def get():
    return "ok"

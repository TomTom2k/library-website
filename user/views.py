from rest_framework.decorators import api_view
from rest_framework.response import Response
from user.models import User
from user.serializer import UserSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.username
        token['is_author'] = user.is_author
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
# Create your views here.


@api_view(['GET'])
def getRouter(request):
    routes = {
        'books/',
        'token/',
        'token/refresh/',
    }
    return Response(routes)


@api_view(['GET', 'POST'])
def createUser(request):
    if request.method == 'GET':
        return Response("Get success")
    if request.method == 'POST':
        data = request.data
        user = User.objects.create_user(
            username=data['username'],
            email=data['email'],
            password=data['password']
        )
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)

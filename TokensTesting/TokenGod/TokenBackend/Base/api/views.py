from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.
from  rest_framework import viewsets

from .serializers import NoteSerializer
from Base.models import Note


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username

        token['email'] = user.email
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class getNotes(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotes2(request):
    user = request.user
    notes=user.note_set.all()
    serializer = NoteSerializer(notes,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getRoutes(request):
    routes=[
        "/api/token/",
        "/api/token/refresh",
    ]
    return Response(routes)

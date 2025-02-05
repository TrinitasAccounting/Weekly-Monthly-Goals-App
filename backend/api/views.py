from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer     
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note

# Create your views here.

# ListCreateAPIView will not only create one but will also list all of the created if we want as well
class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

# this allows us to add some customer functionality for the create. In this case, the author is readonly in the serializer so we have to manually pass the author property in as well since it wont be typed in
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)




class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
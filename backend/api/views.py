from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer     
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note

# Create your views here.

# Create 
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


# Delete
class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

# This is specifying only the notes that belong to the logged in author (by filtering the notes list)
    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)


# PATCH for a note (editting)
# This is wrong for the edit patch
# class ItemPartialUpdateView(generics.UpdateAPIView):
#     serializer_class = NoteSerializer
#     permission_classes = [IsAuthenticated]

#     def patch(self, request, note_id):
#         try:
#             note = Note.objects.get(pk=note_id)
#         except Note.DoesNotExist:
#             return Response(status=status.HTTP_404_NOT_FOUND)

#         serializer = NoteSerializer(note,data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
from django.urls import path
from .views import NoteListCreate, NoteDelete, CreateUserView, GigListCreate, ApplicationListCreate, LocationListCreate

urlpatterns = [
    path('notes/', NoteListCreate.as_view(), name='note-list-create'),
    path('notes/<int:pk>/', NoteDelete.as_view(), name='note-delete'),
    path('register/', CreateUserView.as_view(), name='register'),
    path('gigs/', GigListCreate.as_view(), name='gig-list-create'),
    path('applications/', ApplicationListCreate.as_view(), name='application-list-create'),
    path('locations/', LocationListCreate.as_view(), name='location-list-create'),
]
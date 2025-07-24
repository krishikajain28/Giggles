from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note, Gig, Application, Location
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username","password"]
        extra_kwargs = {"passward": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class GigSerializer(serializers.ModelSerializer):
    location = LocationSerializer(read_only=True)
    class Meta:
        model = Gig
        fields = '__all__'

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'

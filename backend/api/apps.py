"""
apps.py
Configuration for the API app in the ZenJob Clone backend.
"""
from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

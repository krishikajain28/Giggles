"""
asgi.py
ASGI config for the ZenJob Clone backend project. Used for deploying with ASGI servers.
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

application = get_asgi_application()

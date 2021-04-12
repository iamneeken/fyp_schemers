from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    #path('api/', include('base.urls')),
    path('api/products/', include('base.urls.product_urls')),
    path('api/users/', include('base.urls.user_urls')),
    path('api/orders/', include('base.urls.order_urls')),

    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
]

urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 

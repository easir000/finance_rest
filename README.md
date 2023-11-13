cd financial_health

python -m venv myenv  
myenv\Scripts\activate  


//Run the migrate command
python manage.py migrate  
python manage.py runserver
python manage.py makemigrations
 python3 manage.py migrate 




//Update the settings.py

DATABASES = {  
    'default': {  
        'ENGINE': 'django.db.backends.mysql',  
        'NAME': 'my_database',  
        'USER': 'root',  
        'PASSWORD': 'your_password',  
        'HOST': '127.0.0.1',  
        'PORT': '3306',  
        'OPTIONS': {  
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'"  
        }  
    }  
}  



cd ..
vue create financial-health-frontend
cd financial-health-frontend

npm install -g @vue/cli
npm install



npm install vue-router vuex
npm install axios
npm install vue-router@next vuex@next
npm install vue@next vue-router@next vuex@next
vue add router
vue add vuex
npm install axios
npm install chart.js vue-chartjs
npm install vue-router@4 vuex@4

npm run serve
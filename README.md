<p>cd financial_health</p>
<p>python -m venv myenv <br />myenv\Scripts\activate</p>
<p><br />//Run the migrate command<br />python manage.py migrate <br />python manage.py runserver<br />python manage.py makemigrations<br /> python3 manage.py migrate</p>
<p>&nbsp;</p>
<p><br />//Update the settings.py</p>
<p>DATABASES = { <br /> 'default': { <br /> 'ENGINE': 'django.db.backends.mysql', <br /> 'NAME': 'my_database', <br /> 'USER': 'root', <br /> 'PASSWORD': 'your_password', <br /> 'HOST': '127.0.0.1', <br /> 'PORT': '3306', <br /> 'OPTIONS': { <br /> 'init_command': "SET sql_mode='STRICT_TRANS_TABLES'" <br /> } <br /> } <br />}</p>
<p>&nbsp;</p>
<p>cd ..<br />vue create financial-health-frontend<br />cd financial-health-frontend</p>
<p>npm install -g @vue/cli<br />npm install</p>
<p>&nbsp;</p>
<p>npm install vue-router vuex<br />npm install axios<br />npm install vue-router@next vuex@next<br />npm install vue@next vue-router@next vuex@next<br />vue add router<br />vue add vuex<br />npm install axios<br />npm install chart.js vue-chartjs<br />npm install vue-router@4 vuex@4</p>
<p>npm run serve</p>

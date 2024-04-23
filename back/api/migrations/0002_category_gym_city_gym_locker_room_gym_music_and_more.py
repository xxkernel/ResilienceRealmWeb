# Generated by Django 5.0.4 on 2024-04-22 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='gym',
            name='city',
            field=models.CharField(default='Unknown', max_length=100),
        ),
        migrations.AddField(
            model_name='gym',
            name='locker_room',
            field=models.BooleanField(default=False, verbose_name='Гардероб'),
        ),
        migrations.AddField(
            model_name='gym',
            name='music',
            field=models.BooleanField(default=False, verbose_name='Музыка'),
        ),
        migrations.AddField(
            model_name='gym',
            name='parking',
            field=models.BooleanField(default=False, verbose_name='Парковка'),
        ),
        migrations.AddField(
            model_name='gym',
            name='shop',
            field=models.BooleanField(default=False, verbose_name='Магазин'),
        ),
        migrations.AddField(
            model_name='gym',
            name='shower',
            field=models.BooleanField(default=False, verbose_name='Душ'),
        ),
        migrations.AddField(
            model_name='gym',
            name='twenty_four_seven',
            field=models.BooleanField(default=False, verbose_name='24/7'),
        ),
        migrations.AddField(
            model_name='gym',
            name='wifi',
            field=models.BooleanField(default=False, verbose_name='Вайфай'),
        ),
        migrations.AddField(
            model_name='gym',
            name='categories',
            field=models.ManyToManyField(related_name='gyms', to='api.category'),
        ),
    ]
# Generated by Django 3.2.3 on 2021-05-22 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.IntegerField()),
                ('r1', models.IntegerField()),
                ('r2', models.IntegerField()),
                ('r3', models.IntegerField()),
                ('r4', models.IntegerField()),
                ('r5', models.IntegerField()),
            ],
        ),
    ]

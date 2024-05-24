# Generated by Django 4.2.13 on 2024-05-21 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_kadai'),
    ]

    operations = [
        migrations.RenameField(
            model_name='kadai',
            old_name='choice_text',
            new_name='description',
        ),
        migrations.AddField(
            model_name='kadai',
            name='title',
            field=models.CharField(default='default description', max_length=200),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Choice',
        ),
        migrations.DeleteModel(
            name='Question',
        ),
    ]
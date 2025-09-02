from django.db import models
from django.contrib.postgres.fields import ArrayField


class ClubRosterRegistration(models.Model):
    class Status(models.TextChoices):
        NEW = "New", "New"
        RETURNING = "Returning", "Returning"

    start_time = models.DateTimeField()
    completion_time = models.DateTimeField()
    school_email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    preferred_name = models.CharField(max_length=255, blank=True, null=True)
    personal_email = models.EmailField(blank=True, null=True)
    status = models.CharField(max_length=10, choices=Status.choices)
    club_join_date = models.DateField()
    major = models.TextField()
    exp_grad_date = models.IntegerField(blank=True, null=True)  # store year (e.g., 2027)
    interests = models.TextField(blank=True, null=True)
    added_to_comm_channels = ArrayField(
        models.TextField(), blank=True, null=True
    )  # optional: Slack, Discord, etc.
    comments = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.school_email})"


class MemberZipcode(models.Model):
    zipcode = models.CharField(max_length=10)
    member_count = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.zipcode} ({self.member_count})"

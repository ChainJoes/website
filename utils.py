from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

sg_api_key = "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"
sg = SendGridAPIClient(sg_api_key)


def send_mail(email: str):
    from_email = "test@em4786.chainjoes.com"
    to_email = "info@chainjoes.com"
    subject = "New subscriber"

    message = email

    message = Mail(
        from_email=from_email,
        to_emails=to_email,
        subject=subject,
        plain_text_content=message,
    )

    try:
        response = sg.send(message)
        print("Email sent successfully. Status code:", response.status_code)
        print(response)
        return True
    except Exception as e:
        print("Error sending email:", e)
        return False
<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Honeypot — silently accept but do nothing with bot submissions
if (!empty($_POST['bot-field'])) {
    echo json_encode(['success' => true]);
    exit;
}

// Math captcha
$challengeA = (int) ($_POST['challenge_a'] ?? -1);
$challengeB = (int) ($_POST['challenge_b'] ?? -1);
$captchaAnswer = (int) ($_POST['captcha_answer'] ?? -2);
if ($captchaAnswer !== $challengeA + $challengeB) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Captcha failed']);
    exit;
}

$email       = trim(filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL));
$firstName   = trim(strip_tags($_POST['firstName'] ?? ''));
$lastName    = trim(strip_tags($_POST['lastName'] ?? ''));
$jobTitle    = trim(strip_tags($_POST['jobTitle'] ?? ''));
$phone       = trim(strip_tags($_POST['phone'] ?? ''));
$country     = trim(strip_tags($_POST['country'] ?? ''));
$companyName = trim(strip_tags($_POST['companyName'] ?? ''));
$interests   = trim(strip_tags($_POST['interests'] ?? ''));

if (!$firstName || !$lastName || !$jobTitle || !$companyName || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing or invalid fields']);
    exit;
}

$to = 'info@connectspotexhibitions.com';
$subject = 'New enquiry from connectspotexhibitions.com';

$body  = "New contact form submission:\n\n";
$body .= "Name: $firstName $lastName\n";
$body .= "Job Title: $jobTitle\n";
$body .= "Company: $companyName\n";
$body .= "Email: $email\n";
$body .= "Phone: " . ($phone !== '' ? $phone : 'Not provided') . "\n";
$body .= "Country of Residence: " . ($country !== '' ? $country : 'Not provided') . "\n";
$body .= "Interested in: " . ($interests !== '' ? $interests : 'Not specified') . "\n";

// IMPORTANT: the From address should be a real mailbox on this domain
// (e.g. no-reply@connectspotexhibitions.com) so GoDaddy's mail server
// doesn't get flagged for sending "From" a domain it doesn't host mail for.
$headers  = "From: no-reply@connectspotexhibitions.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Mail could not be sent']);
}

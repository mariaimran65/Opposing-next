export const SLACK_SERVICE_URL =
  'https://hooks.slack.com/services/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';

const parseMessage = (message) => {
  if (message instanceof Error) {
    return;
  }
  if (typeof message === 'object') {
    return JSON.stringify(message, null, 4);
  }
  return message;
};

const getColorFromVariant = (variant = 'none') => {
  switch (variant) {
    case 'none':
      return '#5a29a7';
    case 'error':
      return '#FF4842';
    default:
      return '#439FE0';
  }
};

const slack = async (message, pretext, variant, extra) => {
  try {
    const slackMessageBody = {
      attachments: [
        {
          title: pretext,
          text: `${extra ? parseMessage(extra) : ''}${parseMessage(message)}`,
          color: getColorFromVariant(variant)
        }
      ]
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessageBody),
      redirect: 'follow'
    };

    const response = await fetch(SLACK_SERVICE_URL, requestOptions);
    const responseBody = await response.text();
    return responseBody;
  } catch (error) {
    console.error('[Slack Exception Error]: ', error?.message || error);
  }
};

export default slack;

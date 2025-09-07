import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    project_type: formData.projectType,
  };

  return emailjs.send(
    'service_dpbjll7', // service ID
    'template_95vz6do', // template ID
    templateParams,
    '1R0Cl988jCi7yo3U_' // public key
  );
};

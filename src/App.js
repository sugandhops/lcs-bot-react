import './App.css';
import ChatBot from 'react-simple-chatbot';

function App() {
  const handleServiceSelection = (value) => {
    switch (value) {
      case 'devops':
        return 'We offer DevOps services to streamline your development operations.';
      case 'pwa':
        return 'Progressive Web Apps (PWA) can enhance your web experience with native app features.';
      case 'laravel':
        return 'Laravel is a powerful PHP framework for building web applications.';
      case 'wordpress':
        return 'WordPress is a popular content management system (CMS) for websites.';
      case 'shopify':
        return 'Shopify is an e-commerce platform for building online stores.';
      case 'python-odoo-erp':
        return 'Odoo ERP is a comprehensive suite of business applications built on Python.';
      case 'crm':
        return 'CRM (Customer Relationship Management) systems help manage customer interactions and data.';
      default:
        return 'I\'m sorry, I\'m not familiar with that service at the moment.';
    }
  };

  return (
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'Hello, what is your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, nice to meet you!',
          trigger: '4',
        },
        {
          id: '4',
          message: 'What IT service are you interested in?',
          trigger: '5',
        },
        {
          id: '5',
          options: [
            { value: 'devops', label: 'DevOps', trigger: '6' },
            { value: 'pwa', label: 'Progressive Web Apps (PWA)', trigger: '6' },
            { value: 'laravel', label: 'Laravel', trigger: '6' },
            { value: 'wordpress', label: 'WordPress', trigger: '6' },
            { value: 'shopify', label: 'Shopify', trigger: '6' },
            { value: 'python-odoo-erp', label: 'Python Odoo ERP', trigger: '6' },
            { value: 'crm', label: 'CRM', trigger: '6' },
          ],
        },
        {
          id: '6',
          message: ({ previousValue }) => handleServiceSelection(previousValue),
          end: true,
        },
      ]}
      floating={true}
    />
  );
}

export default App;

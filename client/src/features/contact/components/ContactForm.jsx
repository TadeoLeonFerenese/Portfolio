import { useState } from 'react';
import { submitContact } from '../api';
import Button from '@components/ui/Button';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrors({});
    setServerMessage('');

    try {
      const response = await submitContact(formData);
      setStatus('success');
      setServerMessage(response.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      if (err.response && err.response.status === 422) {
        // Laravel validation errors
        setErrors(err.response.data.errors);
      } else {
        setServerMessage('Ocurrió un error inesperado via API.');
      }
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.title}>Hablemos</h2>
      
      {status === 'success' ? (
        <div className={styles.successMessage}>
          <h3 className={styles.stamp}>CASE CLOSED</h3>
          <p>{serverMessage}</p>
          <Button onClick={() => setStatus('idle')} variant="outline">NEW REPORT</Button>
        </div>
      ) : (
        <div className={styles.paperSheet}>
          <div className={styles.paperHeader}>
             <span className={styles.stampConfidential}>CONFIDENTIAL</span>
             <h3>POLICE REPORT // CONTACT</h3>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>AGENT NAME:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Kennedy, Leon S."
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              />
              {errors.name && <span className={styles.errorText}>{errors.name[0]}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>COMM FREQUENCY (EMAIL):</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="leon@rpd.gov"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              />
              {errors.email && <span className={styles.errorText}>{errors.email[0]}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>MISSION DETAILS:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`${styles.input} ${styles.textArea} ${errors.message ? styles.inputError : ''}`}
              />
              {errors.message && <span className={styles.errorText}>{errors.message[0]}</span>}
            </div>

            <div className={styles.actions}>
              {status === 'error' && !serverMessage && Object.keys(errors).length === 0 && (
                 <p className={styles.generalError}>TRANSMISSION FAILED.</p>
              )}
               <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'TRANSMITTING...' : 'TRANSMIT DATA'}
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default ContactForm;

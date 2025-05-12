import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <form className="contact-form neon-card animate-in" onSubmit={handleSubmit}>
      <h3 className="form-title">💌 메세지를 보내보세요!</h3>
      <div className="form-group">
        <label>👤 이름</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름을 입력해주세요"
          required
        />
      </div>
      <div className="form-group">
        <label>📧 이메일</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="이메일을 입력해주세요"
          required
        />
      </div>
      <div className="form-group">
        <label>💬 메시지</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="전달할 메시지를 적어주세요"
          required
        ></textarea>
      </div>
      <button className="glow-button" type="submit">
        🚀 보내기
      </button>
      {submitted && (
        <p className="success-slide">✅ 전송 완료! 곧 연락드릴게요.</p>
      )}
    </form>
  );
};

export default ContactForm;

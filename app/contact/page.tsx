"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const { brand } = siteConfig;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    // For now, just show an alert
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
            İletişim
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Randevu almak veya sorularınız için bizimle iletişime geçin. Size en
            uygun zamanı birlikte planlayalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-surface rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-semibold text-theme-primary mb-6">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary mb-1">Telefon</h3>
                    <a
                      href={`tel:${brand.contact.phone}`}
                      className="text-secondary hover:text-theme-primary transition-colors"
                    >
                      {brand.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${brand.contact.whatsapp.replace(/[^\\d]/g, "")}?text=${encodeURIComponent(`Merhaba! ${brand.name} için randevu almak istiyorum.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-green-600 transition-colors"
                    >
                      {brand.contact.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary mb-1">E-posta</h3>
                    <a
                      href={`mailto:${brand.contact.email}`}
                      className="text-secondary hover:text-blue-600 transition-colors"
                    >
                      {brand.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary mb-1">Adres</h3>
                    <div className="text-secondary">
                      <div>{brand.contact.address.street}</div>
                      <div>
                        {brand.contact.address.city},{" "}
                        {brand.contact.address.state}{" "}
                        {brand.contact.address.zipCode}
                      </div>
                      <div>{brand.contact.address.country}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-surface rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-semibold text-theme-primary mb-6">
                Çalışma Saatleri
              </h2>
              <div className="space-y-3">
                {Object.entries(brand.hours).map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-2 border-b border-secondary/30 last:border-0"
                  >
                    <span className="text-primary font-medium">{day}</span>
                    <span className="text-secondary">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-semibold text-theme-primary mb-6">
              Mesaj Gönder
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-primary font-medium mb-2"
                >
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-primary font-medium mb-2"
                >
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-primary font-medium mb-2"
                >
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Randevu talebi veya sorularınızı buraya yazabilirsiniz..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 px-6 rounded-lg font-medium text-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Gönder
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-secondary/30">
              <p className="text-sm text-muted text-center mb-4">
                Hızlı iletişim için:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${brand.contact.phone}`}
                  className="flex-1 bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-accent transition-colors flex items-center justify-center"
                >
                  <Phone className="h-4 w-4 mr-2" /> Hemen Ara
                </a>
                <a
                  href={`https://wa.me/${brand.contact.whatsapp.replace(/[^\\d]/g, "")}?text=${encodeURIComponent(`Merhaba! ${brand.name} için randevu almak istiyorum. Ben iletişim sayfasından yazıyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

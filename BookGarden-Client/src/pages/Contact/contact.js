import { Button, Input } from "antd";
import React from "react";
import "./contact.css";

const { TextArea } = Input;

const Contact = () => {
  return (
    <div id="container" class="pt-5">
      
      <div class="container pb-5">
        <section class="text-center">
          <div class="row">
            <div class="col-lg-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863806019075!2d105.74468687471467!3d21.038134787457583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455e940879933%3A0xcf10b34e9f1a03df!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1sen!2s!4v1733412890028!5m2!1sen!2s"
                width="460"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div class="col-lg-7">
              <form className="p-4 rounded shadow-lg bg-light">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Họ tên</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập họ tên"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Địa chỉ email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className="form-label">Chủ đề</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập chủ đề"
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className="form-label">Nội dung</label>
                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="Nhập nội dung"
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                    >
                      Gửi
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

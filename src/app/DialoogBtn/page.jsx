'use client'

import React, { useState, useRef, useEffect } from 'react';

export default function DialogButton() {
  const [accountNumber, setAccountNumber] = useState('338970');
  const [visible, setVisible] = useState(false);
  const [ticketCount, setTicketCount] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const modalRef = useRef();

  const handleTicketChange = (e) => {
    const count = e.target.value;
    setTicketCount(count);
    setTotalPrice(count ? count * 100 : '');
  };

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(accountNumber);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible]);

  return (
    <div>
      <button
        className="bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition duration-300"
        onClick={() => setVisible(true)}
      >
        حجز تذاكر
      </button>

      {visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={modalRef} className="bg-white rounded-lg shadow-lg w-full max-w-3xl">
            <div className="flex justify-between items-center border-b px-4 py-3">
              <h2 className="text-xl font-bold">معلومات الحساب</h2>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setVisible(false)}
              >
                &times;
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-right">الاسم رباعي</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="ادخل الاسم"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-right">رقم الهاتف *</label>
                  <input
                  dir='rtl'
                    type="tel"
                    className="w-full border rounded px-3 py-2"
                    placeholder="ادخل رقم الهاتف"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-right">السكن</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="ادخل السكن"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-right">عدد التذاكر *</label>
                  <select 
                    className="w-full border rounded px-3 py-2"
                    value={ticketCount}
                    onChange={handleTicketChange}
                    required
                  >
                    <option value="">اختر عدد التذاكر</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-right">السعر الكلي للتذاكر</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    value={totalPrice ? `${totalPrice} ريال` : ''}
                    placeholder="سيظهر تلقائيًا"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block mb-2 text-right" >رقم الواتساب أو الايميل لإرسال التذكرة *</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="ادخل رقم الواتساب أو الايميل"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-right">رقم حساب يمكن إرسال قيمة التذاكر</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-1 mt-2 rounded-full"
                    onClick={copyAccountNumber}
                  >
                    نسخ
                  </button>
                </div>

                <div>
                  <label className="block mb-2 text-right">اسم صاحب الحساب</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="ادخل اسم صاحب الحساب"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-right">الرجاء رفع صورة دفع المبلغ الكلي</label>
                  <div className="relative">
                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-green-50 file:text-green-700
                        hover:file:bg-green-100
                        cursor-pointer
                        border rounded px-3 py-2"
                      accept="image/*"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-green-600 text-white w-full py-2 rounded-full font-bold hover:bg-green-700 transition duration-300"
                >
                  تأكيد الحجز
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  ); 
}

const InvoiceDetail = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <form className="flex flex-col" action="">
        <div className="flex justify-between">
          <label htmlFor="invoiceNumber">شماره فاکتور</label>
          <input type="text" id="invoiceNumber"  className="border border-gray-300"/>
        </div>
        <div className="flex justify-between">
          <label htmlFor="invoiceDate">تاریخ فاکتور</label>
          <input type="date" id="invoiceDate"  className="border border-gray-300"/>
        </div>
        <div className="flex justify-between">
          <label htmlFor="dueDate">تاریخ پرداخت</label>
          <input type="date" id="dueDate"  className="border border-gray-300"/>
        </div>
      </form>
    </div>
  );
};

export default InvoiceDetail;

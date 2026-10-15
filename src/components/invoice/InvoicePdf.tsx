import InvoiceDocument from "./InvoiceDocument";
import { PDFViewer } from "@react-pdf/renderer";

const InvoicePdf = ({items}) => {
  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <InvoiceDocument data={items}/>
      </PDFViewer>
    </div>
  );
};

export default InvoicePdf;

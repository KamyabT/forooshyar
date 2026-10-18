import InvoiceDocument from "./InvoiceDocument";
import { PDFViewer } from "@react-pdf/renderer";

const InvoicePdf = ({ data }) => {
  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <InvoiceDocument data={data} />
      </PDFViewer>
    </div>
  );
};

export default InvoicePdf;

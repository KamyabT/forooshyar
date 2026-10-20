import { Document, Page, View, Text, Font, StyleSheet } from "@react-pdf/renderer";
import { CalendarDays } from "lucide-react";
import type { InvoiceItemType } from "@/types/index";

Font.register({
  family: "iranSans",
  fonts: [
    { src: "/fonts/IRANSansWeb_Light.ttf", fontWeight: 400 },
    { src: "/fonts/IRANSansWeb_Bold.ttf", fontWeight: 700 },
  ],
});

const col = {
  total: "15%",
  discount: "10%",
  price: "15%",
  quantity: "10%",
  description: "25%",
  product: "25%",
};

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontSize: 11,
    lineHeight: 1.6,
    color: "#3f3f46",
    fontFamily: "iranSans",
    direction: "rtl",
    gap: "20px",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "red",
    paddingBottom: 12,
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    color: "#18181b",
    marginTop: 40,
    paddingBottom: 16,
    borderBottomWidth: 3,
    // borderBottomColor: "#e0301e",
    // borderBottom: "1px solid black",
  },
  paragraph: {
    marginTop: 20,
  },
  itemsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #d6d6d6",
    paddingBottom: 5,
    paddingHorizontal: 5,
    textAlign: "right",
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #e1ecfb",
  },

  innerItem: {
    paddingVertical: "10",
    paddingHorizontal: "10",
    textAlign: "right",
  },

  totals: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "50px",
  },

  calculationBox: {},

  calculationSubItems: {
    justifyContent: "space-between",
    border: "1px solid green",
    width: "150px",
    flexDirection: "row",
    padding: 10,
  },

  productDescription: {
    flexWrap: "wrap",
    textAlign: "right",
  },

  businessInfo: {
    textAlign: "right",
    direction: "rtl",
  },
  textSg: {
    textAlign: "right",
  },

  invoiceInfoSection: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    gap: "20px",
  },

  customerInfoBoxHeader: {
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: "#f1f7fe",
    paddingHorizontal: "10px",
    paddingVertical: "5px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },

  customerInfoBox: {
    flexDirection: "column",
    width: "50%",
    border: "1px solid #e1ecfb",
    borderRadius: "8px",
  },

  customerInfoBoxItem: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    textAlign: "right",
    direction: "rtl",
    borderBottom: "1px solid #e1ecfb",
    paddingHorizontal: "10px",
    paddingVertical: "5px",
  },

  customerInfoBoxItemsCotainer: {
    backgroundColor: "#fafcfe",
    borderRadius: "8px",
  },

  invoiceInfoBox: {
    flexDirection: "column",
    width: "50%",
    border: "1px solid #e1ecfb",
    borderRadius: "8px",
  },

  invoiceInfoBoxHeader: {
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: "#f1f7fe",
    paddingHorizontal: "10px",
    paddingVertical: "5px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },

  invoiceInfoBoxItemsCotainer: {
    backgroundColor: "#fafcfe",
    borderRadius: "8px",
  },

  invoiceInfoBoxItem: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    textAlign: "right",
    direction: "rtl",
    borderBottom: "1px solid #e1ecfb",
    paddingHorizontal: "10px",
    paddingVertical: "5px",
  },

  invoiceInfoBoxInnerView: {
    display: "flex",
    flexDirection: "row-reverse",
  },

  itemsListSection: {
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    border: "1px solid #e1ecfb",
    padding: "3px 3px",
  },

  itemsListHeader: {
    backgroundColor: "#f0f7ff",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingBottom: 5,
    paddingHorizontal: 5,
    textAlign: "right",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
  },

  innerItemsListHeader: {
    display: "flex",
    justifyContent: "center",
    padding: "5px 10px",
  },

  invoiceFinalSection: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    gap: "20px",
  },

  invoiceCommentBox: {
    flexDirection: "column",
    width: "50%",
    padding: "15px 15px",
    backgroundColor: "#fafdff",
    border: "1px solid #e1ecfb",
    borderRadius: "8px",
  },

  invoiceCommentBoxHeader: {
    display: "flex",
    flexDirection: "row-reverse",
    marginBottom: "10px",
  },

  invoiceTotalBox: {
    flexDirection: "column",
    width: "50%",
    border: "1px solid #e1ecfb",
    backgroundColor: "#f0f7ff",
    borderRadius: "8px",
  },
});

interface InvoiceDocumentProps {
  data: {
    billNumber: string;
    invoiceCreationDate: string;
    invoicePaymentDate: string;
    address: string;
    name: string;
    phone: string;
    items: InvoiceItemType[];
  };
}

const InvoiceDocument = ({ data }: InvoiceDocumentProps) => {
  console.log(data, 666666);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View>Title</View>
          <View>App Logo and business info</View>
        </View>
        <View style={styles.invoiceInfoSection}>
          <View style={styles.customerInfoBox}>
            <View style={styles.customerInfoBoxHeader}>
              <Text>Icon</Text>
              <Text>اطلاعات مشتری</Text>
            </View>
            <View style={styles.customerInfoBoxItemsCotainer}>
              <View style={styles.customerInfoBoxItem}>
                <Text>نام مشتری</Text>
                <Text>{data.name}</Text>
              </View>
              <View style={styles.customerInfoBoxItem}>
                <Text>شماره تماس</Text>
                <Text>{data.phone}</Text>
              </View>
              <View style={styles.customerInfoBoxItem}>
                <Text>آدرس</Text>
                <Text>{data.address}</Text>
              </View>
            </View>
          </View>
          <View style={styles.invoiceInfoBox}>
            <View style={styles.invoiceInfoBoxHeader}>
              <Text>i</Text>
              <Text>اطلاعات فاکتور</Text>
            </View>
            <View style={styles.invoiceInfoBoxItemsCotainer}>
              <View style={styles.invoiceInfoBoxItem}>
                <View style={styles.invoiceInfoBoxInnerView}>
                  <Text>i</Text>
                  <Text>شماره فاکتور</Text>
                </View>
                <Text>{data.billNumber}</Text>
              </View>
              <View style={styles.invoiceInfoBoxItem}>
                <View style={styles.invoiceInfoBoxInnerView}>
                  <Text>i</Text>
                  <Text>تاریخ صدور</Text>
                </View>
                <Text>{data.invoiceCreationDate}</Text>
              </View>
              <View style={styles.invoiceInfoBoxItem}>
                <View style={styles.invoiceInfoBoxInnerView}>
                  <Text>i</Text>
                  <Text>مهلت پرداخت</Text>
                </View>
                <Text>{data.invoicePaymentDate}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.itemsListSection}>
          <View style={styles.itemsListHeader}>
            <View style={[styles.innerItemsListHeader, { width: col.product }]}>
              <Text>نام محصول</Text>
            </View>
            <View style={[styles.innerItemsListHeader, { width: col.description }]}>
              <Text>توضیحات محصول</Text>
            </View>
            <View style={[styles.innerItemsListHeader, { width: col.quantity }]}>
              <Text>تعداد</Text>
            </View>
            <View style={[styles.innerItemsListHeader, { width: col.price }]}>
              <Text>قیمت واحد</Text>
            </View>
            <View style={[styles.innerItemsListHeader, { width: col.discount }]}>
              <Text>تخفیف</Text>
            </View>
            <View style={[styles.innerItemsListHeader, { width: col.total }]}>
              <Text>جمع کل</Text>
            </View>
          </View>

          {data.items.map((item) => {
            return (
              <View style={styles.items} key={item.id}>
                <View style={[styles.innerItem, { width: col.total }]}>
                  <Text>45000</Text>
                </View>
                <View style={[styles.innerItem, { width: col.discount }]}>
                  <Text>{item.discount}</Text>
                </View>
                <View style={[styles.innerItem, { width: col.price }]}>
                  <Text>{item.price}</Text>
                </View>
                <View style={[styles.innerItem, { width: col.quantity }]}>
                  <Text>{item.quantity}</Text>
                </View>
                <View
                  style={[
                    styles.innerItem,
                    styles.productDescription,
                    { width: col.description },
                  ]}
                >
                  <Text>{item.productDescription}</Text>
                </View>
                <View style={[styles.innerItem, { width: col.product }]}>
                  <Text>{item.product}</Text>
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.invoiceFinalSection}>
          <View style={styles.invoiceCommentBox}>
            <View style={styles.invoiceCommentBoxHeader}>
              <Text>I</Text>
              <Text>توضیحات</Text>
            </View>
            <View>
              <Text>Sample Text</Text>
            </View>
          </View>
          <View style={styles.invoiceTotalBox}>
            <View style={styles.customerInfoBoxItem}>
              <Text>جمع کل</Text>
              <Text>0 تومان</Text>
            </View>
            <View style={styles.customerInfoBoxItem}>
              <Text>تخفیف</Text>
              <Text>0 تومان</Text>
            </View>
            <View style={styles.customerInfoBoxItem}>
              <Text>مالیات</Text>
              <Text>0 تومان</Text>
            </View>
            <View style={styles.customerInfoBoxItem}>
              <Text>مبلغ نهایی</Text>
              <Text>0 تومان</Text>
            </View>
          </View>
        </View>

        <View>
          <View>business contact info</View>
          <View>policy</View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceDocument;

// <Document>
//   <Page size="A4" style={styles.page}>
//     <View style={styles.header}>
//       <View>
//         <Text>Logo</Text>
//         <Text>فروشگاه کامیاب</Text>
//         <Text>تهران، ایران</Text>
//         <Text>09123456789</Text>
//         <Text>info@example.com</Text>
//       </View>
//       <View style={styles.businessInfo}>
//         <Text style={styles.textSg}>نام و نام خانوادگی : {data.name}</Text>
//         <Text style={styles.textSg}>تلفن تماس : {data.phone}</Text>
//         <Text style={styles.textSg}>آدرس : {data.address}</Text>
//         <Text style={styles.textSg}>
//           تاریخ صدور فاکتور : {data.invoiceCreationDate}
//         </Text>
//         <Text style={styles.textSg}>
//           تاریخ پرداخت فاکتور : {data.invoicePaymentDate}
//         </Text>
//       </View>
//     </View>
//     <View style={styles.itemsHeader}>
//       <View style={{ width: col.total }}>
//         <Text>جمع کل</Text>
//       </View>
//       <View style={{ width: col.discount }}>
//         <Text>تخفیف</Text>
//       </View>
//       <View style={{ width: col.price }}>
//         <Text>قیمت واحد</Text>
//       </View>
//       <View style={{ width: col.quantity }}>
//         <Text>تعداد</Text>
//       </View>
//       <View style={{ width: col.description }}>
//         <Text>توضیحات محصول</Text>
//       </View>
//       <View style={{ width: col.product }}>
//         <Text>نام محصول</Text>
//       </View>
//     </View>

// {data.items.map((item) => {
//   return (
//     <View style={styles.items} key={item.id}>
//       <View style={[styles.innerItem, { width: col.total }]}>
//         <Text>45000</Text>
//       </View>
//       <View style={[styles.innerItem, { width: col.discount }]}>
//         <Text>{item.discount}</Text>
//       </View>
//       <View style={[styles.innerItem, { width: col.price }]}>
//         <Text>{item.price}</Text>
//       </View>
//       <View style={[styles.innerItem, { width: col.quantity }]}>
//         <Text>{item.quantity}</Text>
//       </View>
//       <View
//         style={[
//           styles.innerItem,
//           styles.productDescription,
//           { width: col.description },
//         ]}
//       >
//         <Text>{item.productDescription}</Text>
//       </View>
//       <View style={[styles.innerItem, { width: col.product }]}>
//         <Text>{item.product}</Text>
//       </View>
//     </View>
//   );
// })}

//     <View style={styles.totals}>
//       <View style={styles.signature}>
//         <Text>محل امضا</Text>
//       </View>
//       <View style={styles.calculationBox}>
//         <View style={styles.calculationSubItems}>
//           <View>
//             <Text>10000</Text>
//           </View>
//           <View style={styles.testt}>
//             <Text>جمع کل</Text>
//           </View>
//         </View>
//         <View style={styles.calculationSubItems}>
//           <View>
//             <Text>10000</Text>
//           </View>
//           <View>
//             <Text>تخفیف ها</Text>
//           </View>
//         </View>
//         <View style={styles.calculationSubItems}>
//           <View>
//             <Text>10000</Text>
//           </View>
//           <View>
//             <Text>مالیات</Text>
//           </View>
//         </View>
//         <View style={styles.calculationSubItems}>
//           <View>
//             <Text>10000</Text>
//           </View>
//           <View>
//             <Text>مبلغ قابل پرداخت</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   </Page>
// </Document>

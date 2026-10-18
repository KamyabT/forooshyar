import { Document, Page, View, Text, Font, StyleSheet } from "@react-pdf/renderer";

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
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e4e4e7",
    paddingBottom: 12,
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    color: "#18181b",
    marginTop: 40,
    paddingBottom: 16,
    borderBottomWidth: 3,
    borderBottomColor: "#e0301e",
  },
  paragraph: {
    marginTop: 20,
  },
  itemsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid red",
    paddingBottom: 5,
    paddingHorizontal: 5,
    textAlign: "right",
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",

    borderBottom: "1px solid yellow",
  },

  innerItem: {
    borderLeft: "1px solid blue",
    borderRight: "1px solid blue",
    paddingVertical: 5,
    paddingHorizontal: 5,
    textAlign: "right",
  },

  totals: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "50px",
  },
  signature: {
    // flexGrow: "1",
  },

  calculationBox: {
    // flexGrow: "4",
  },
  testt: {
    direction: "ltr",
    textAlign: "right",
  },
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
});

const InvoiceDocument = ({ data }) => {
  console.log(data, 666666);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text>Logo</Text>
            <Text>فروشگاه کامیاب</Text>
            <Text>تهران، ایران</Text>
            <Text>09123456789</Text>
            <Text>info@example.com</Text>
          </View>
          <View style={styles.businessInfo}>
            <Text style={styles.textSg}>نام و نام خانوادگی : {data.name}</Text>
            <Text style={styles.textSg}>تلفن تماس : {data.phone}</Text>
            <Text style={styles.textSg}>آدرس : {data.address}</Text>
            <Text style={styles.textSg}>
              تاریخ صدور فاکتور : {data.invoiceCreationDate}
            </Text>
            <Text style={styles.textSg}>
              تاریخ پرداخت فاکتور : {data.invoicePaymentDate}
            </Text>
          </View>
        </View>
        <View style={styles.itemsHeader}>
          <View style={{ width: col.total }}>
            <Text>جمع کل</Text>
          </View>
          <View style={{ width: col.discount }}>
            <Text>تخفیف</Text>
          </View>
          <View style={{ width: col.price }}>
            <Text>قیمت واحد</Text>
          </View>
          <View style={{ width: col.quantity }}>
            <Text>تعداد</Text>
          </View>
          <View style={{ width: col.description }}>
            <Text>توضیحات محصول</Text>
          </View>
          <View style={{ width: col.product }}>
            <Text>نام محصول</Text>
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

        <View style={styles.totals}>
          <View style={styles.signature}>
            <Text>محل امضا</Text>
          </View>
          <View style={styles.calculationBox}>
            <View style={styles.calculationSubItems}>
              <View>
                <Text>10000</Text>
              </View>
              <View style={styles.testt}>
                <Text>جمع کل</Text>
              </View>
            </View>
            <View style={styles.calculationSubItems}>
              <View>
                <Text>10000</Text>
              </View>
              <View>
                <Text>تخفیف ها</Text>
              </View>
            </View>
            <View style={styles.calculationSubItems}>
              <View>
                <Text>10000</Text>
              </View>
              <View>
                <Text>مالیات</Text>
              </View>
            </View>
            <View style={styles.calculationSubItems}>
              <View>
                <Text>10000</Text>
              </View>
              <View>
                <Text>مبلغ قابل پرداخت</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceDocument;

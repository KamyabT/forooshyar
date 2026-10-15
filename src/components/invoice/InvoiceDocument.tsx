import { Document, Page, View, Text, Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: "iranSans",
  fonts: [
    { src: "/fonts/IRANSansWeb_Light.ttf", fontWeight: 400 },
    { src: "/fonts/IRANSansWeb_Bold.ttf", fontWeight: 700 },
  ],
});

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
});

const InvoiceDocument = ({ data }) => {
  console.log(data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text>Logo</Text>
          </View>
          <View>
            <Text>فروشگاه کامیاب</Text>
            <Text>تهران، ایران</Text>
            <Text>09123456789</Text>
            <Text>info@example.com</Text>
          </View>
        </View>
        <View style={styles.itemsHeader}>
          <View>
            <Text>جمع کل</Text>
          </View>
          <View>
            <Text>تخفیف</Text>
          </View>
          <View>
            <Text>قیمت واحد</Text>
          </View>
          <View>
            <Text>تعداد</Text>
          </View>
          <View>
            <Text>توضیحات محصول</Text>
          </View>
          <View>
            <Text>نام محصول</Text>
          </View>
        </View>

        {data.map((item) => {
          return (
            <View style={styles.items} key={item.id}>
              <View style={styles.innerItem}>
                <Text>45000</Text>
              </View>
              <View style={styles.innerItem}>
                <Text>{item.discount}</Text>
              </View>
              <View style={styles.innerItem}>
                <Text>{item.price}</Text>
              </View>
              <View style={styles.innerItem}>
                <Text>{item.quantity}</Text>
              </View>
              <View style={styles.innerItem}>
                <Text>{item.productDescription}</Text>
              </View>
              <View style={styles.innerItem}>
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

import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableOpacityBase,
  ScrollView,
  Image,
  FlatList
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";

Feather.loadFont();
MaterialCommunityIcons.loadFont();
export default Details = ({ route, navigation }) => {

  const { item } = route.params;

  const renderIngredientsItem = ({ item }) => {
    return (
      <View style={[styles.ingredientImageWrapper, {
        marginLeft: item.id === "1" ? 20 : 0
      }]}>
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {/*Header*/}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather name="chevron-left" size={12} color={colors.textDark} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.headerRight}>
                <MaterialCommunityIcons name="star" size={12} color={colors.white} />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>


        {/* Price  */}
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>

        {/* Pizza Info */}
        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Size</Text>
              <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber}</Text>
            </View>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Crust</Text>
              <Text style={styles.infoItemText}>{item.crust}</Text>
            </View>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Delivery in</Text>
              <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
            </View>
          </View>
          <View>
            <Image source={item.image} style={styles.itemImage} />
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.ingridientsWrapper}>
          <Text style={styles.ingridientsTitle}>Ingredients</Text>
          <View style={styles.ingridientsListWrapper}>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={item.ingredients}
              renderItem={renderIngredientsItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>


        {/* Place an Order*/}
        <TouchableOpacity onPress={() => alert("Your order has been placed!")}>
          <View style={styles.orderWrapper}>
            <Text style={styles.orderText}>Place an order</Text>
            <Feather name="chevron-right" size={18} color={colors.black} />
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 1,
    padding: 12,
    borderRadius: 10
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30
  },
  title: {
    fontFamily: "Montserrat Bold",
    fontSize: 32,
    color: colors.textDark,
    width: "60%"
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20

  },
  priceText: {
    fontFamily: "Montserrat Bold",
    fontSize: 32,
    color: colors.price
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  infoLeftWrapper: {
    paddingLeft: 20
  },
  infoItemWrapper: {
    marginBottom: 20
  },
  infoItemTitle: {
    fontFamily: "Montserrat Medium",
    fontSize: 14,
    color: colors.textLight
  },
  infoItemText: {
    fontFamily: "Montserrat SemiBold",
    fontSize: 18,
    color: colors.textDark
  },
  itemImage: {
    resizeMode: "contain",
    marginLeft: 50
  },
  ingridientsWrapper: {
    marginTop: 40
  },
  ingridientsTitle: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat Medium",
    fontSize: 14,
    color: colors.textLight
  },
  ingridientsListWrapper: {
    paddingVertical: 20
  },
  ingredientImageWrapper: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  ingredientImage: {
    resizeMode: "contain"
  },
  orderWrapper: {
    marginHorizontal: 20,
    marginVertical:40,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 25,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  orderText: {
    fontFamily: "Montserrat Bold",
    fontSize:14,
    marginRight:10
  }
});

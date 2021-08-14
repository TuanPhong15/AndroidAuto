import {useCarNavigation} from 'react-native-android-auto';

export function Main() {
  const shop = useShop();
  const navigation = useCarNavigation();
  return (
    <list-template
      title={ "Shopify Local Delivery"}
      isLoading={false}
    >
      <item-list header="Delivery Lists">
          <row
            key={8}
            title={"node.description"}
            texts={["final"]}
            onPress={() => {
              navigation.push("deliveryList");
            }}
          />
      </item-list>
    </list-template>
  );
}
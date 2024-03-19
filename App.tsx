import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  const users = [
    { id: 1, name: "Kartik" },
    { id: 2, name: "Anil" },
    { id: 3, name: "Ankush" },
    { id: 4, name: "Sanjay" },
    { id: 5, name: "Swaraj" },
    { id: 6, name: "John" },
    { id: 7, name: "Doe" },
    { id: 8, name: "Jane" },
    { id: 9, name: "Michael" },
    { id: 10, name: "Jessica" },
    { id: 11, name: "David" },
    { id: 12, name: "Jennifer" },
    { id: 13, name: "Emily" },
    { id: 14, name: "Daniel" },
    { id: 15, name: "Matthew" },
    { id: 16, name: "Laura" },
    { id: 17, name: "Robert" },
    { id: 18, name: "Sarah" },
    { id: 19, name: "Mark" },
    { id: 20, name: "Michelle" },
    { id: 21, name: "James" },
    { id: 22, name: "Amanda" },
    { id: 23, name: "Christopher" },
    { id: 24, name: "Amy" },
    { id: 25, name: "Brian" },
    { id: 26, name: "Nicole" },
    { id: 27, name: "Justin" },
    { id: 28, name: "Stephanie" },
    { id: 29, name: "Kevin" },
    { id: 30, name: "Melissa" }
  ];

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']; // Add more colors as needed

  return (
    <View>
      <Text style={{ fontSize: 31 }}>Grid with Dynamic Data</Text>
      <ScrollView>
        <View style={{ flex: 1 , flexDirection:'row', flexWrap:'wrap'}}>
          {
            users.map((item, index)=>
              <Text key={item.id} style={[styles.item, {backgroundColor: colors[index % colors.length]}]}>
                {item.name}
              </Text>
            )
          }
        </View>
      </ScrollView>
    </View>
  );
};

const styles=StyleSheet.create({
  item: {
    fontSize: 20,
    color: 'white',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical:'center',
    textAlign:'center'
  }
});

export default App;

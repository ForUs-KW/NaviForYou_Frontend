import React, { useState } from "react";
import { View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import CustomButton from "../../component/CustomButton.js";
import viewStyles from '../../Style/ViewStyles.js';
import textStyles from "../../Style/TextStyles.js";

const LoginPage_2 = ({ navigation }) => {
    const [checkboxState, setCheckboxState] = useState({
        allCheck: false,
        item1: false,
        item2: false,
        item3: false,
    });

    const allBtnEvent = () => {
        setCheckboxState((prevState) => {
            const allChecked = !prevState.allCheck;
            return {
                allCheck: allChecked,
                item1: allChecked,
                item2: allChecked,
                item3: allChecked,
            };
        });
    };

    const itemBtnEvent = (itemName) => {
        setCheckboxState((prevState) => ({
            ...prevState,
            [itemName]: !prevState[itemName],
        }));
    };

    return (
        <View>
            <CustomButton
                buttonColor={'(0, 0, 0, 0)'}
                buttonWidth={'15%'}
                title={'<'}
                titleSize={30}
                onPress={() => navigation.navigate('LoginPage_1')}
            />

            <Text style={textStyles.title2}>약관 동의</Text>

            <BouncyCheckbox
                style={{ marginLeft: 30, marginBottom: 20 }}
                isChecked={checkboxState.allCheck}
                text="전체 동의"
                onPress={(allBtnEvent)}//왜 안먹히는 걸까
            />

            {Object.entries(checkboxState)
                .filter(([key]) => key !== 'allCheck')
                .map(([key, value]) => (
                    <BouncyCheckbox
                        key={key}
                        style={{ marginLeft: 30, marginBottom: 20 }}
                        isChecked={value}
                        text={`${key} 항목`}
                        onPress={() => itemBtnEvent(key)}
                    />
                ))}

            <View style={viewStyles.centerItems}>
                <CustomButton
                    buttonColor={'lightgrey'}
                    title={'다음'}
                    onPress={() => navigation.navigate('LoginPage_3')}
                />
            </View>
        </View>
    );
};

export default LoginPage_2;
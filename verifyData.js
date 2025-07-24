import axios from "axios"
import { Alert } from "react-native";


export const verifyIUC = async () => {

 try {
    const response = await axios({
        method: 'get',
        url: `https://maskawasubapi.com/ajax/validate_iuc?smart_card_number=iuc&cablename=cable_name`,
        headers: {
            'Authorization': 'Token null',
            'Content-Type': 'application/json'
        }
    });
    console.log('response:', response.data);
 } catch (error) {
    console.error('error:', error.message);
 }

};
















export const TopUp = async (network, amount, phone) => {
  
  try {
    const response = await axios.post(`https://maskawasubapi.com/api/topup`, {
    network_id: network,
    amount: amount,
    mobile_number: phone,
    ported_number: true,
    airtime_type: 'VTU'
    },
    {
        headers: {
            'Authorization': 'Token null',
            'Content-Type': 'application/json'
        }
    });
    console.log('response', response.data);
  } catch (error) {
    console.error('error', error.message);
  }
};
















export const verifyMeter = async () => {

  try {
    const response = await axios({
        method: 'get',
        url: `https://maskawasubapi.com/ajax/validate_meter_number?meternumber=meternumber&disconame=disconame&mtype=m`,
        headers: {
            'Authorization': 'Token null',
            'Content-Type': 'application/json'
        }
    });
    console.log('response', response.data);
  } catch (error) {
    console.error('error', error.message);
  }
};












export const getCable = async () => {

    const Token = '...............';
  try {
    const response = await axios.get(`https://maskawasubapi.com/api/cablesub`, {
      headers: {
        Authorization: `Bearer ${Token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('response:', response.data);
    Alert.alert('success');
  } catch (error) {
    console.log('error', error.message);
    Alert.alert('error');
  }
};
import React, { useCallback, useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView,
  FlatList, 
  Animated, 
  Dimensions, 
  TouchableOpacity 
 } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Colors from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';
import LoadingView from '../components/LoadingView/LoadingView';
const { width, height } = Dimensions.get('window');

const data = [
  {image: require(`../assets/images_casino/a.png`)},
  {image: require(`../assets/images_casino/b.png`)},
  {image: require(`../assets/images_casino/c.png`)},
  {image: require(`../assets/images_casino/7.png`)},
  {image: require(`../assets/images_casino/e.png`)},
  {image: require(`../assets/images_casino/f.png`)},
  {image: require(`../assets/images_casino/7.png`)},
  {image: require(`../assets/images_casino/8.png`)},
  {image: require(`../assets/images_casino/9.png`)},
  {image: require(`../assets/images_casino/10.png`)},
]

const data22 = [
  require(`../assets/images_casino/1.png`),
  require(`../assets/images_casino/2.png`),
  require(`../assets/images_casino/3.png`),
  require(`../assets/images_casino/4.png`),
  require(`../assets/images_casino/5.png`),
  require(`../assets/images_casino/6.png`),
  require(`../assets/images_casino/7.png`),
  require(`../assets/images_casino/8.png`),
  require(`../assets/images_casino/9.png`),
  require(`../assets/images_casino/10.png`),
]

const data2 = [
  "When you play craps you start each sequence of rolls with a come out roll. You can bet on the pass or don't pass line during a come out roll. Eventually (usually after one roll, but not always) a point is set. \n\nOnce a point is set you can place a special wager called an odds bet. The odds bet doesn't have a marked place on the table because the casinos don't really want you to place them. You slide your bet out behind the pass line or don't pass line bet you placed and say you want the odds. If you have any questions ask one of the casino personnel running the game. Odds bets are offered at true odds of zero. The house edge is zero, so you should place odds bets whenever you have the opportunity.",
  "Playing perfect basic strategy while playing blackjack can help you reduce the house edge by 3% or more. The house rules have a great deal to do with the overall house edge but no matter what the rules, if you play using the best strategy you'll save money in the long run. \n\nThis gives you the best chance to have a winning session every time you play and it helps you lose less when you have losing sessions. Blackjack strategy cards and charts are available online and in most casino stores.",
  "When you play baccarat you should always bet on the banker. It offers the lowest house edge and is the only strategy decision you can make at the table to help you. The banker bet has a house edge of just a hair over 1%, making it one of the lower house edges in the casino.",
  "Of course you want to play only on the video poker machines that offer the best pay charts in the casino, but you should always use a strategy card for the game you're playing. \nUsing a strategy card can save you 2% or more on every hand you play. As you can often play hundreds of hands per hour, saving this much can help you play up to four times longer on the same bankroll over time. You can pick up strategy cards in the casino gift shop or print one from the Internet. \nIf I plan to play video poker I slip the popular strategy cards in my pocket before heading to the casino so I'm prepared for whatever game is available with a good pay chart.",
  "Slot machines have some of the highest house edges you can find in a casino. On top of that you can usually play 300 or more spins per hour. When you combine a large house edge and so many decisions per hour you create one of the worst things you can do in a casino. \n\nWhile there aren't any true strategies that can help you beat slot machines in the long run, the best thing you can do (beyond simply not playing) is slow down your play. If you only play 100 spins per hour instead of 300 your bankroll will last three times as long on average.",
  "If you want to start winning more when playing Texas Hold 'em, you need to start playing fewer hands. The basic idea is if you enter hands with better starting hands than your opponents on average you'll win more hands. \nOf course in the short run anything can happen, but the better starting hand wins more often than the other hand in the long run. If you've been losing on a consistent basis and are willing to try something drastic to change your outcome try this experiment for the next 10 hours you play. Only enter the pot with the following hands. \n\nA/A, \nK/K, \nQ/Q, \nJ/J, \n10/10, \n9/9, \nA/K suited or not, \nA/Q suited or not, \nA/J suited or not, \nA/10 suited or not, \nK/Q suited, \nK/J suited. \n\nI realize you won't be playing many hands, but you stand a much better chance of winning than when you play 30 or 40% (or more) of your starting hands. Once you prove you can do it for 10 hours of play you can start playing a few more hands, but don't go wild. Losing players play too many hands, not too few. \n\nEventually you should shoot for playing an average of somewhere around 20% of your hands. Once you start playing fewer hands you can start working on other things to improve your game like position and post flop play.",
  "Roulette is a game that doesn't have much strategy that can change the long term outcome. It doesn't matter what you bet on the house edge is the same. What you can do is only play on roulette wheels with only a single zero space. Wheels with a double zero and a single zero space have a house edge of over 5.2%. \n\nThe house edge on single zero wheels is only 2.7%. Though it doesn't work out perfectly in the short run, in the long run you can play almost twice as long on the same bankroll at a single zero wheel than you can playing a double zero wheel. This is enough reason for this simple strategy to be included on any list.",
  "This one may be a bit out there for some, especially if you gamble because you enjoy the action. I have a friend who uses a unique system or strategy every time he takes a trip to Las Vegas. He divides his bankroll by the number of days on the trip and bets the entire stake for each day on a close to 50 / 50 wager at the beginning of the day. \n\nIf he wins the bet he puts the original wager in his pocket for profit and plays the rest of the day with his win. When he loses he does something else all day. Here's an example: He starts with a $2,000 bankroll for a five day trip. This gives him a daily bankroll of $400. Every day when he gets up he finds a single zero roulette wheel and places a $400 bet on red or black or even or odd. When he wins he puts his $400 in his pocket and gambles with the $400 he won. \n\nOn an average trip he'll win two or three of the five first bets so he'll come home with $800 to $1,200 almost every trip. Of course over the long run he may have a few times where he doesn't get to gamble at all besides the first bets of the day. After this happened the first time he considered changing his plan so he'd be guaranteed a chance to gamble more, but he decided to stick with his original plan. \n\nA few things he considered doing differently: You can divide your trip bankroll by an extra day creating an extra amount you can use if you lose your original wager two days in a row. In the example above you'd divide $2,000 by six for a daily bankroll of $333. If you lose your first bet both of the first two days you can play with your extra $333 that day. The other thing you can do is recycle your winnings from earlier days when you lose the first bet. \n\nHere's an example: If you win your first bet on day one you can use the money you put in your pocket to play on a day when you lose the first wager. You'll also win some days with the money you gamble with throughout the day. You can use that money to play later on your trip too.",
  "Tournaments are a great way to play for a big prize while investing a set amount of money. You pay an entry fee and if you do well enough you win a prize. Payout structures vary, but the largest tournaments can have payout in the hundreds of thousands or millions. You can find all kinds of tournaments. Most people think about poker tournaments, but many casinos offer slots tournaments, blackjack tournaments, and video poker tournaments. \n\nThis is one of the best strategies for extending your bankroll. Some players plan their entire gambling trip around tournaments. When you play tournaments you don't have to win very often to make money in the long run. Even if you're just able to place high enough to win something occasionally you'll usually do better than letting a regular table game or machine grind your money down.",
  "This one goes for any type of poker including Texas Hold 'em, 7 card stud, and Omaha. You should bluff less than you do now. It always looks like the players on television are bluffing all the time but the truth is most pros only bluff occasionally. Try bluffing half the time you currently do in the future. You'll find your bluffs work more often and you make more money the times when you aren't bluffing.",
]

const title = [
  "Take the Odds",
  "Blackjack Basic Strategy",
  "Always Bet the Banker",
  "Video Poker Strategy Cards",
  "Slow Down At the Slot Machines",
  "Play Fewer Texas Hold'em Hands",
  "Only Play On Single Zero Wheels",
  "Just Place One Bet",
  "Play Tournaments",
  "Bluff Less",
]

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function LoadingScreen({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.hideAsync();
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.hideAsync();
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

 

  if (!appIsReady) {
    return  (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.loading.background}}
        >
        <Image 
          source={require('../assets/images_loading/loading_casino.png')}
        />
         <Image 
          source={require('../assets/images_loading/loading_stratigies.png')}
        />
         <Image 
          source={require('../assets/images_loading/loading_book.png')}
        />
         <Image 
          source={require('../assets/images_loading/loading_wlm.png')}
        />
      </View>
    );
  }
  return (
    <View
      style={{ flex: 1, backgroundColor: '#454545' }}
      >
      <StatusBar
          translucent={true}
          backgroundColor={Colors.loading.background}
          style={'light'}
      />
     
      <View style={{marginTop: 0,paddingTop: 20}}>
        <Image 
            style={{
              width,
              height: 100,
              resizeMode: 'contain',
            }}
            source={require('../assets/images_casino/banner_header.png')}
          />
      </View>

      <View style={{
        paddingHorizontal: 50,
        marginVertical: 2
      }}>
         <Text style={{
           color: Colors.text_yellow.color,
           fontWeight: '700',
           textAlign: 'center',
           fontSize: 20
           }}>10 Simple Casino Gambling Strategies That Work Like Magic</Text>
      </View>

      <FlatList
        data={data}
        horizontal
        pagingEnabled
        keyExtractor={(_,index)=> index.toString()}
        renderItem={({item, index})=>{
          return <View style={{
            width, 
            alignItems: 'center',
            shadowColor: '#0000',
            shadowOpacity: 1,
            shadowOffset:{
              height: 0,
              width: 0
            },
            shadowRadius: 20
            }}>
                  <TouchableOpacity
                    onPress={()=>{
                      navigation.navigate('Details', {
                        itemId: title[index],
                        otherParam: data2[index],
                        imageParam: data22[index] 
                      });
                      
                    }}
                    >
                    <Image
                        source={item.image}
                        style={{
                          width: imageW,
                          height: imageH,
                          resizeMode: 'contain'
                        }}
                    />
                  </TouchableOpacity>
          </View>
        }}
      />

      <View style={{
        position: 'absolute', 
        flex: 1,
        height: 200,
        bottom: 0}}>
          <Text style={{position: 'absolute', 
          width: width, 
          textAlign: 'right',
          fontWeight: '700', 
          fontSize: 18, 
          marginTop: 40,
          color: '#ebdab4'}}>Swipe Left</Text>
        <Image
          style={{
            resizeMode: 'contain',
            width: 250,
            height: 200
          }}
          source={require('../assets/images_casino/casion_girl.png')}
        />
        
      </View>

    </View>
  );
}
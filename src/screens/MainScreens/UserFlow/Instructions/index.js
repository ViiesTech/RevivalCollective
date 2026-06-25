import { View, Text } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import FeedHeader from '../../../../components/FeedHeader';
import TextHeader from '../../../../components/TextHeader';
import NormalText from '../../../../components/NormalText';
import { AppColors } from '../../../../config/Colors';
import LineBreak from '../../../../components/LineBreak';
import { responsiveWidth } from '../../../../globalFunctions/Resposive_Dimensions';

const Instructions = ({ route }) => {
  const { type } = route.params;
  return (
    <ScreenWrapper style={{padding: responsiveWidth(4.5),}} scrollable edges={['top']}>
      <TextHeader
        noPadding
        title={type === 'terms' ? 'Terms and Conditions' : 'Privacy Policy'}
        subTitle="Lorem Ipsum Slmpy Dolor Text "
      />
      <LineBreak val={3}/>
      <NormalText fontWeight="350" size={1.8} color={AppColors.white} title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <LineBreak val={2}/>
      <NormalText fontWeight="350" size={1.8} color={AppColors.white} title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae voluptas nulla pariatur?" />
    </ScreenWrapper>
  );
};

export default Instructions;

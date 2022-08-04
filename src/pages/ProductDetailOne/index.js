import React from "react";

import {
  Column,
  Row,
  Img,
  Line,
  Text,
  PagerIndicator,
  Button,
  List,
} from "components";

const ProductDetailOnePage = () => {
  function handleNavigate7() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate8() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-interui items-center mx-[auto] overflow-auto w-[100%]"
        compid="39:158"
        comptype="Column"
      >
        <Row
          className="bg-gray_801 items-center lg:p-[29px] xl:p-[33px] p-[38px] 3xl:p-[45px] shadow-bs w-[100%]"
          compid="39:255"
          comptype="Row"
        >
          <Img
            src="images/img_menu.png"
            className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[45px] xl:ml-[51px] ml-[58px] 3xl:ml-[69px] w-[2%]"
            compid="39:259"
            comptype="Image"
            alt="menu"
          />
          <Img
            src="images/img_group21_47X169.png"
            className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] lg:ml-[395px] xl:ml-[451px] ml-[508px] 3xl:ml-[609px] mt-[1px] w-[12%]"
            compid="39:266"
            comptype="Image"
            alt="GroupTwentyOne"
          />
          <Img
            src="images/img_search.png"
            className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[325px] xl:ml-[371px] ml-[418px] 3xl:ml-[501px] lg:w-[24px] xl:w-[27px] w-[31px] 3xl:w-[37px]"
            compid="39:262"
            comptype="Image"
            alt="search"
          />
          <Img
            src="images/img_cart.png"
            className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
            compid="39:265"
            comptype="Image"
            alt="cart"
          />
        </Row>
        <Row
          className="items-center lg:mt-[164px] xl:mt-[187px] mt-[211px] 3xl:mt-[253px] w-[90%]"
          compid="74"
          comptype="Row"
        >
          <Line
            className="bg-black_900 h-[3px] w-[5%]"
            compid="39:253"
            comptype="Line"
          />
          <div
            className="bg-gray_401 lg:h-[467px] xl:h-[534px] h-[600px] 2xl:h-[601px] 3xl:h-[721px] 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] rounded-radius10 w-[35%]"
            compid="39:252"
            comptype="View"
          ></div>
          <Column
            className="lg:ml-[126px] xl:ml-[144px] ml-[162px] 3xl:ml-[194px] w-[36%]"
            compid="72"
            comptype="Column"
          >
            <Row className="items-center w-[95%]" compid="63" comptype="Row">
              <Text
                className="font-interui font-medium lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-bluegray_902 w-[auto]"
                compid="39:251"
                comptype="Text"
              >
                Name
              </Text>
              <Text
                className="font-jacquesfrancois font-normal lg:ml-[188px] xl:ml-[215px] ml-[242px] 3xl:ml-[290px] not-italic lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-bluegray_902 w-[auto]"
                compid="39:250"
                comptype="Text"
              >
                350 $
              </Text>
            </Row>
            <Text
              className="font-bold lg:mt-[259px] xl:mt-[296px] mt-[333px] 3xl:mt-[399px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 tracking-ls1 w-[auto]"
              compid="39:249"
              comptype="Text"
            >
              COLOR
            </Text>
            <PagerIndicator
              className="h-[25px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[max-content]"
              compid="39:245"
              comptype="PagerIndicator"
              count={3}
              activeCss="inline-block cursor-pointer rounded-radius50 w-[25px] h-[25px] bg-gray_801"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer rounded-radius50 w-[25px] h-[25px] bg-gray_401"
              selectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] mx-[2.50px] xl:mx-[2px]"
              unselectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] mx-[2.50px] xl:mx-[2px]"
            />
            <Row
              className="justify-between 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] mt-[90px] w-[100%]"
              compid="65"
              comptype="Row"
            >
              <Text
                className="font-bold mt-[4px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-bluegray_902 w-[auto]"
                compid="39:244"
                comptype="Text"
              >
                QTY
              </Text>
              <Button
                className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center w-[21%]"
                compid="39:241"
                comptype="Button"
                shape="RoundedBorder10"
                variant="FillGray401"
              >
                - 01 +
              </Button>
              <Button
                className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center tracking-ls1 w-[58%]"
                compid="39:238"
                comptype="Button"
                shape="RoundedBorder10"
                variant="FillGray401"
              >
                ADD TO CART
              </Button>
            </Row>
          </Column>
          <Line
            className="bg-black_900 h-[3px] lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] rotate-[180deg] w-[5%]"
            compid="39:254"
            comptype="Line"
          />
        </Row>
        <Text
          className="font-bold lg:mt-[167px] xl:mt-[191px] mt-[215px] 3xl:mt-[258px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-black_900 w-[auto]"
          compid="39:237"
          comptype="Text"
        >
          Related Product
        </Text>
        <Column
          className="items-end lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:pl-[115px] xl:pl-[131px] pl-[148px] 3xl:pl-[177px] w-[100%]"
          compid="79"
          comptype="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compid="68"
            comptype="Row"
          >
            <List
              className="lg:gap-[38px] xl:gap-[44px] gap-[50px] 3xl:gap-[60px] grid grid-cols-2 min-h-[auto] w-[48%]"
              compid="77"
              comptype="List"
              orientation="horizontal"
            >
              <Column
                className="bg-gray_201 border-bw5 border-gray_400 border-solid items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius10 w-[100%]"
                compid="39:230"
                comptype="Column"
              >
                <Text
                  className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]"
                  compid="39:236"
                  comptype="Text"
                >
                  Name
                </Text>
                <Img
                  src="images/img_menu_gray_903.png"
                  className="lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] lg:mt-[233px] xl:mt-[266px] mt-[300px] 3xl:mt-[360px] w-[13%]"
                  compid="39:233"
                  comptype="Image"
                  alt="menu One"
                />
                <Text
                  className="font-medium mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]"
                  compid="39:232"
                  comptype="Text"
                >
                  Price
                </Text>
              </Column>
              <Column
                className="bg-gray_401 items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius10 w-[100%]"
                compid="39:223"
                comptype="Column"
              >
                <Text
                  className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]"
                  compid="39:229"
                  comptype="Text"
                >
                  Name
                </Text>
                <Img
                  src="images/img_contrast.png"
                  className="lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] lg:mt-[233px] xl:mt-[266px] mt-[300px] 3xl:mt-[360px] w-[13%]"
                  compid="39:226"
                  comptype="Image"
                  alt="contrast One"
                />
                <Text
                  className="font-medium mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]"
                  compid="39:225"
                  comptype="Text"
                >
                  Price
                </Text>
              </Column>
            </List>
            <List
              className="lg:gap-[38px] xl:gap-[44px] gap-[50px] 3xl:gap-[60px] grid grid-cols-2 min-h-[auto] w-[48%]"
              compid="78"
              comptype="List"
              orientation="horizontal"
            >
              <Column
                className="bg-gray_201 items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius10 w-[100%]"
                compid="39:215"
                comptype="Column"
              >
                <Text
                  className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]"
                  compid="39:222"
                  comptype="Text"
                >
                  Name
                </Text>
                <PagerIndicator
                  className="h-[12px] lg:mt-[233px] xl:mt-[266px] mt-[300px] 3xl:mt-[360px] w-[max-content]"
                  compid="39:218"
                  comptype="PagerIndicator"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_401"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_904"
                  selectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                  unselectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                />
                <Text
                  className="font-medium lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]"
                  compid="39:217"
                  comptype="Text"
                >
                  Price
                </Text>
              </Column>
              <Column
                className="bg-gray_401 items-center lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius10 w-[100%]"
                compid="39:207"
                comptype="Column"
              >
                <Text
                  className="font-medium lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]"
                  compid="39:214"
                  comptype="Text"
                >
                  Name
                </Text>
                <PagerIndicator
                  className="h-[12px] lg:mt-[233px] xl:mt-[266px] mt-[300px] 3xl:mt-[360px] w-[max-content]"
                  compid="39:210"
                  comptype="PagerIndicator"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_201"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_904"
                  selectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                  unselectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                />
                <Text
                  className="font-medium lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_902 w-[auto]"
                  compid="39:209"
                  comptype="Text"
                >
                  Price
                </Text>
              </Column>
            </List>
          </Row>
        </Column>
        <footer
          className="bg-gray_801 lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]"
          compid="39:159"
          comptype="Footer"
        >
          <Column
            className="lg:mb-[60px] xl:mb-[69px] mb-[78px] 3xl:mb-[93px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]"
            compid="21"
            comptype="Column"
          >
            <Row
              className="items-center lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] w-[79%]"
              compid="39:180"
              comptype="Row"
            >
              <Row
                className="items-center justify-between w-[51%]"
                compid="39:201"
                comptype="Row"
              >
                <Text
                  className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_201 tracking-ls1 w-[auto]"
                  compid="39:202"
                  comptype="Text"
                >
                  SUBSCRIBE TO OUR NEWSLETTER
                </Text>
                <Button
                  className="flex items-center justify-center text-center w-[42%]"
                  compid="39:203"
                  comptype="Button"
                  rightIcon={
                    <Img
                      src="images/img_arrow.png"
                      className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                      compid="39:206"
                      comptype="Image"
                      alt="Vector 2"
                    />
                  }
                  shape="RoundedBorder10"
                  variant="FillBluegray901"
                >
                  <div className="bg-transparent font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] tracking-ls1">
                    Enter Your E-mail Address Here
                  </div>
                </Button>
              </Row>
              <div
                className="bg-gray_201 3xl:h-[117px] lg:h-[76px] xl:h-[87px] h-[97px] 2xl:h-[98px] lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] w-[1px]"
                compid="39:198"
                comptype="View"
              ></div>
              <Text
                className="font-bold lg:ml-[178px] xl:ml-[203px] ml-[229px] 3xl:ml-[274px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_201 tracking-ls1 w-[auto]"
                compid="39:181"
                comptype="Text"
              >
                JOIN US ON
              </Text>
              <Button
                className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                compid="39:194"
                comptype="IconButton"
                onClick={handleNavigate7}
                size="smIcn"
                variant="icbFillIndigo600"
              >
                <Img
                  src="images/img_facebook.png"
                  className="flex items-center justify-center"
                  compid="39:194"
                  comptype="IconButton"
                  onClick={handleNavigate7}
                  alt="facebook"
                />
              </Button>
              <Button
                className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                compid="39:191"
                comptype="IconButton"
                onClick={handleNavigate8}
                size="smIcn"
                variant="icbFillBlue300"
              >
                <Img
                  src="images/img_twitter.png"
                  className="flex items-center justify-center"
                  compid="39:191"
                  comptype="IconButton"
                  onClick={handleNavigate8}
                  alt="twitter"
                />
              </Button>
              <Img
                src="images/img_eye.png"
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                compid="39:182"
                comptype="Image"
                alt="eye"
              />
            </Row>
            <div
              className="bg-gray_201 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[100%]"
              compid="39:199"
              comptype="View"
            ></div>
            <Row
              className="items-center lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] mt-[107px] 3xl:mt-[128px] lg:mt-[83px] xl:mt-[95px] w-[73%]"
              compid="61"
              comptype="Row"
            >
              <Text
                className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_201 tracking-ls1 w-[auto]"
                compid="39:179"
                comptype="Text"
              >
                TERMS & CODITION POLICY
              </Text>
              <Img
                src="images/img_group2_2.png"
                className="2xl:h-[100px] 3xl:h-[119px] lg:h-[77px] xl:h-[89px] h-[99px] lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] w-[11%]"
                compid="39:162"
                comptype="Image"
                alt="GroupTwo"
              />
              <Text
                className="font-bold lg:ml-[180px] xl:ml-[206px] ml-[232px] 3xl:ml-[278px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_201 w-[auto]"
                compid="39:161"
                comptype="Text"
              >
                © 2019 Bamboo All Rights Reserved
              </Text>
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ProductDetailOnePage;

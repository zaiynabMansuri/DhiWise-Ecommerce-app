import React from "react";

import { Column, Row, Img, Button, Text, Line } from "components";

const HomepageFourPage = () => {
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate4() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-interui items-center mx-[auto] w-[100%]"
        compid="39:43"
        comptype="Column"
      >
        <Column
          className="bg-gray_801 items-center lg:pb-[186px] xl:pb-[213px] pb-[240px] 3xl:pb-[288px] w-[100%]"
          compid="12"
          comptype="Column"
        >
          <Row
            className="bg-gray_801 items-center lg:p-[29px] xl:p-[33px] p-[38px] 3xl:p-[45px] shadow-bs w-[100%]"
            compid="39:130"
            comptype="Row"
          >
            <Img
              src="images/img_menu.png"
              className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[45px] xl:ml-[51px] ml-[58px] 3xl:ml-[69px] w-[2%]"
              compid="39:134"
              comptype="Image"
              alt="menu"
            />
            <Img
              src="images/img_group2_8.png"
              className="lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] lg:ml-[395px] xl:ml-[451px] ml-[508px] 3xl:ml-[609px] mt-[1px] w-[12%]"
              compid="39:141"
              comptype="Image"
              alt="GroupTwo"
            />
            <Img
              src="images/img_search.png"
              className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[325px] xl:ml-[371px] ml-[418px] 3xl:ml-[501px] lg:w-[24px] xl:w-[27px] w-[31px] 3xl:w-[37px]"
              compid="39:137"
              comptype="Image"
              alt="search"
            />
            <Img
              src="images/img_cart.png"
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              compid="39:140"
              comptype="Image"
              alt="cart"
            />
          </Row>
          <Row
            className="items-center justify-between lg:mt-[199px] xl:mt-[228px] mt-[257px] 3xl:mt-[308px] w-[87%]"
            compid="161"
            comptype="Row"
          >
            <Button
              className="flex 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] items-center justify-center rounded-radius50 3xl:w-[117px] lg:w-[76px] xl:w-[87px] w-[98px]"
              compid="39:122"
              comptype="IconButton"
              size="lgIcn"
            >
              <Img
                src="images/img_vector_black_900.png"
                className="flex items-center justify-center"
                compid="39:122"
                comptype="IconButton"
                alt="Vector"
              />
            </Button>
            <Button
              className="flex 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] items-center justify-center rounded-radius50 3xl:w-[117px] lg:w-[76px] xl:w-[87px] w-[98px]"
              compid="39:126"
              comptype="IconButton"
              size="lgIcn"
            >
              <Img
                src="images/img_vector_black_900_98X98.png"
                className="flex items-center justify-center"
                compid="39:126"
                comptype="IconButton"
                alt="Vector One"
              />
            </Button>
          </Row>
        </Column>
        <Text
          className="font-bold mt-[103px] 3xl:mt-[123px] lg:mt-[80px] xl:mt-[91px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-black_900 w-[auto]"
          compid="39:120"
          comptype="Text"
        >
          Featured Product
        </Text>
        <Row
          className="items-center lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[87%]"
          compid="171"
          comptype="Row"
        >
          <Column className="w-[51%]" compid="166" comptype="Column">
            <Row className="items-center w-[95%]" compid="169" comptype="Row">
              <div
                className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rounded-radius10 w-[48%]"
                compid="39:110"
                comptype="View"
              ></div>
              <Column
                className="items-center lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[47%]"
                compid="164"
                comptype="Column"
              >
                <div
                  className="bg-gray_401 lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] rounded-radius10 w-[100%]"
                  compid="39:112"
                  comptype="View"
                ></div>
                <div
                  className="bg-gray_401 lg:h-[187px] xl:h-[214px] h-[240px] 2xl:h-[241px] 3xl:h-[289px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] rounded-radius10 w-[100%]"
                  compid="39:113"
                  comptype="View"
                ></div>
              </Column>
            </Row>
            <div
              className="bg-gray_401 lg:h-[406px] xl:h-[465px] h-[522px] 2xl:h-[523px] 3xl:h-[627px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[95%]"
              compid="39:118"
              comptype="View"
            ></div>
            <div
              className="bg-gray_401 lg:h-[541px] xl:h-[619px] h-[695px] 2xl:h-[696px] 3xl:h-[835px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[95%]"
              compid="39:111"
              comptype="View"
            ></div>
          </Column>
          <Column
            className="items-center w-[49%]"
            compid="165"
            comptype="Column"
          >
            <div
              className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rounded-radius10 w-[100%]"
              compid="39:117"
              comptype="View"
            ></div>
            <div
              className="bg-gray_401 lg:h-[550px] xl:h-[629px] h-[707px] 2xl:h-[708px] 3xl:h-[849px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"
              compid="39:119"
              comptype="View"
            ></div>
            <Row
              className="items-center justify-evenly lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]"
              compid="170"
              comptype="Row"
            >
              <Column className="w-[52%]" compid="167" comptype="Column">
                <div
                  className="bg-gray_401 lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] rotate-[180deg] rounded-radius10 w-[91%]"
                  compid="39:115"
                  comptype="View"
                ></div>
                <div
                  className="bg-gray_401 lg:h-[187px] xl:h-[214px] h-[240px] 2xl:h-[241px] 3xl:h-[289px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] rotate-[180deg] rounded-radius10 w-[91%]"
                  compid="39:116"
                  comptype="View"
                ></div>
              </Column>
              <div
                className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rotate-[180deg] rounded-radius10 w-[48%]"
                compid="39:114"
                comptype="View"
              ></div>
            </Row>
          </Column>
        </Row>
        <Column
          className="bg-gray_202 lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] lg:p-[49px] xl:p-[56px] p-[64px] 3xl:p-[76px] w-[100%]"
          compid="39:92"
          comptype="Column"
        >
          <Text
            className="font-bold lg:ml-[380px] xl:ml-[435px] ml-[489px] 3xl:ml-[587px] mt-[4px] lg:text-[32px] xl:text-[37px] text-[42px] 3xl:text-[50px] text-black_900 w-[auto]"
            compid="39:103"
            comptype="Text"
          >
            Bamboo Families
          </Text>
          <Row
            className="items-center justify-center lg:ml-[245px] xl:ml-[281px] ml-[316px] 3xl:ml-[379px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[52%]"
            compid="159"
            comptype="Row"
          >
            <Text
              className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]"
              compid="39:104"
              comptype="Text"
            >
              PRODUCT
            </Text>
            <Text
              className="font-bold lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]"
              compid="39:106"
              comptype="Text"
            >
              PRODUCT
            </Text>
            <Text
              className="font-bold lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]"
              compid="39:107"
              comptype="Text"
            >
              PRODUCT
            </Text>
            <Text
              className="font-bold lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]"
              compid="39:105"
              comptype="Text"
            >
              PRODUCT
            </Text>
          </Row>
          <Line
            className="bg-gray_601 h-[3px] lg:ml-[557px] xl:ml-[637px] ml-[717px] 3xl:ml-[860px] mt-[3px] w-[5%]"
            compid="39:108"
            comptype="Line"
          />
          <Img
            src="images/img_group4_gray_601.png"
            className="lg:h-[234px] xl:h-[267px] h-[300px] 2xl:h-[301px] 3xl:h-[361px] xl:mb-[112px] mb-[126px] 3xl:mb-[151px] lg:mb-[98px] lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] mt-[93px] w-[99%]"
            compid="39:94"
            comptype="Image"
            alt="GroupFour"
          />
        </Column>
        <footer
          className="bg-gray_801 w-[100%]"
          compid="39:44"
          comptype="Footer"
        >
          <Column
            className="lg:mb-[60px] xl:mb-[69px] mb-[78px] 3xl:mb-[93px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]"
            compid="24"
            comptype="Column"
          >
            <Row
              className="items-center lg:ml-[51px] xl:ml-[58px] ml-[66px] 3xl:ml-[79px] w-[79%]"
              compid="39:65"
              comptype="Row"
            >
              <Row
                className="items-center justify-between w-[51%]"
                compid="39:86"
                comptype="Row"
              >
                <Text
                  className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_201 tracking-ls1 w-[auto]"
                  compid="39:87"
                  comptype="Text"
                >
                  SUBSCRIBE TO OUR NEWSLETTER
                </Text>
                <Button
                  className="flex items-center justify-center text-center w-[42%]"
                  compid="39:88"
                  comptype="Button"
                  rightIcon={
                    <Img
                      src="images/img_arrow.png"
                      className="w-[10px] ml-[12px] text-center lg:w-[7px] lg:ml-[9px] xl:w-[8px] xl:ml-[10px] 3xl:w-[12px] 3xl:ml-[14px]"
                      compid="39:91"
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
                compid="39:83"
                comptype="View"
              ></div>
              <Text
                className="font-bold lg:ml-[178px] xl:ml-[203px] ml-[229px] 3xl:ml-[274px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_201 tracking-ls1 w-[auto]"
                compid="39:66"
                comptype="Text"
              >
                JOIN US ON
              </Text>
              <Button
                className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                compid="39:79"
                comptype="IconButton"
                onClick={handleNavigate4}
                size="smIcn"
                variant="icbFillIndigo600"
              >
                <Img
                  src="images/img_facebook.png"
                  className="flex items-center justify-center"
                  compid="39:79"
                  comptype="IconButton"
                  onClick={handleNavigate4}
                  alt="facebook"
                />
              </Button>
              <Button
                className="common-pointer flex lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                compid="39:76"
                comptype="IconButton"
                onClick={handleNavigate1}
                size="smIcn"
                variant="icbFillBlue300"
              >
                <Img
                  src="images/img_twitter.png"
                  className="flex items-center justify-center"
                  compid="39:76"
                  comptype="IconButton"
                  onClick={handleNavigate1}
                  alt="twitter"
                />
              </Button>
              <Img
                src="images/img_eye.png"
                className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                compid="39:67"
                comptype="Image"
                alt="eye"
              />
            </Row>
            <div
              className="bg-gray_201 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[100%]"
              compid="39:84"
              comptype="View"
            ></div>
            <Row
              className="items-center lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] mt-[107px] 3xl:mt-[128px] lg:mt-[83px] xl:mt-[95px] w-[73%]"
              compid="155"
              comptype="Row"
            >
              <Text
                className="font-medium lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_201 tracking-ls1 w-[auto]"
                compid="39:64"
                comptype="Text"
              >
                TERMS & CODITION POLICY
              </Text>
              <Img
                src="images/img_group2_9.png"
                className="2xl:h-[100px] 3xl:h-[119px] lg:h-[77px] xl:h-[89px] h-[99px] lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] w-[11%]"
                compid="39:47"
                comptype="Image"
                alt="GroupTwo One"
              />
              <Text
                className="font-bold lg:ml-[180px] xl:ml-[206px] ml-[232px] 3xl:ml-[278px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_201 w-[auto]"
                compid="39:46"
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

export default HomepageFourPage;

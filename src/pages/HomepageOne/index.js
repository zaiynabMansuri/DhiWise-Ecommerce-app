import React from "react";

import { Column, Row, Img, Button, Text } from "components";

const HomepageOnePage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 items-center mx-[auto] w-[100%]"
        compid="39:521"
        comptype="Column"
      >
        <Column
          className="bg-gray_801 items-center lg:p-[39px] xl:p-[45px] p-[51px] 3xl:p-[61px] w-[100%]"
          compid="4"
          comptype="Column"
        >
          <Row className="items-center w-[93%]" compid="80" comptype="Row">
            <Img
              src="images/img_menu.png"
              className="lg:h-[28px] xl:h-[32px] h-[35px] 2xl:h-[36px] 3xl:h-[43px] w-[4%]"
              compid="39:542"
              comptype="Image"
              alt="menu"
            />
            <Img
              src="images/img_group3_148X169.png"
              className="lg:h-[116px] xl:h-[132px] h-[148px] 2xl:h-[149px] 3xl:h-[178px] lg:ml-[381px] xl:ml-[435px] ml-[490px] 3xl:ml-[588px] w-[14%]"
              compid="39:523"
              comptype="Image"
              alt="GroupThree"
            />
            <Img
              src="images/img_search.png"
              className="lg:h-[39px] xl:h-[44px] h-[49px] 2xl:h-[50px] 3xl:h-[59px] lg:ml-[280px] xl:ml-[320px] ml-[360px] 3xl:ml-[432px] lg:w-[38px] xl:w-[43px] w-[49px] 3xl:w-[58px]"
              compid="39:569"
              comptype="Image"
              alt="search"
            />
            <Img
              src="images/img_cart.png"
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[60px] xl:ml-[69px] ml-[78px] 3xl:ml-[93px] lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              compid="39:572"
              comptype="Image"
              alt="cart"
            />
          </Row>
          <Row
            className="items-center justify-between lg:mb-[147px] xl:mb-[168px] mb-[189px] 3xl:mb-[226px] lg:mt-[140px] xl:mt-[161px] mt-[181px] 3xl:mt-[217px] w-[93%]"
            compid="81"
            comptype="Row"
          >
            <Button
              className="flex 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] items-center justify-center rounded-radius50 3xl:w-[117px] lg:w-[76px] xl:w-[87px] w-[98px]"
              compid="39:543"
              comptype="IconButton"
              size="lgIcn"
            >
              <Img
                src="images/img_vector_black_900.png"
                className="flex items-center justify-center"
                compid="39:543"
                comptype="IconButton"
                alt="Vector"
              />
            </Button>
            <Button
              className="flex 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] items-center justify-center rounded-radius50 3xl:w-[117px] lg:w-[76px] xl:w-[87px] w-[98px]"
              compid="39:547"
              comptype="IconButton"
              size="lgIcn"
            >
              <Img
                src="images/img_vector_black_900_98X98.png"
                className="flex items-center justify-center"
                compid="39:547"
                comptype="IconButton"
                alt="Vector One"
              />
            </Button>
          </Row>
        </Column>
        <Text
          className="font-bold font-interui 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] mt-[87px] lg:text-[46px] xl:text-[53px] text-[60px] 3xl:text-[72px] text-black_900 w-[auto]"
          compid="39:551"
          comptype="Text"
        >
          Featured Product
        </Text>
        <Row
          className="items-center lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] w-[87%]"
          compid="94"
          comptype="Row"
        >
          <Column className="w-[51%]" compid="87" comptype="Column">
            <Row className="items-center w-[95%]" compid="92" comptype="Row">
              <div
                className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rounded-radius10 w-[48%]"
                compid="39:552"
                comptype="View"
              ></div>
              <Column
                className="items-center lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[47%]"
                compid="85"
                comptype="Column"
              >
                <div
                  className="bg-gray_401 lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] rounded-radius10 w-[100%]"
                  compid="39:554"
                  comptype="View"
                ></div>
                <div
                  className="bg-gray_401 lg:h-[187px] xl:h-[214px] h-[240px] 2xl:h-[241px] 3xl:h-[289px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] rounded-radius10 w-[100%]"
                  compid="39:555"
                  comptype="View"
                ></div>
              </Column>
            </Row>
            <div
              className="bg-gray_401 lg:h-[406px] xl:h-[465px] h-[522px] 2xl:h-[523px] 3xl:h-[627px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[95%]"
              compid="39:560"
              comptype="View"
            ></div>
            <div
              className="bg-gray_401 lg:h-[541px] xl:h-[619px] h-[695px] 2xl:h-[696px] 3xl:h-[835px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[95%]"
              compid="39:553"
              comptype="View"
            ></div>
          </Column>
          <Column
            className="items-center w-[49%]"
            compid="86"
            comptype="Column"
          >
            <div
              className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rounded-radius10 w-[100%]"
              compid="39:559"
              comptype="View"
            ></div>
            <div
              className="bg-gray_401 lg:h-[550px] xl:h-[629px] h-[707px] 2xl:h-[708px] 3xl:h-[849px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]"
              compid="39:561"
              comptype="View"
            ></div>
            <Row
              className="items-center justify-evenly lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]"
              compid="93"
              comptype="Row"
            >
              <Column className="w-[52%]" compid="88" comptype="Column">
                <div
                  className="bg-gray_401 lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] rotate-[180deg] rounded-radius10 w-[91%]"
                  compid="39:557"
                  comptype="View"
                ></div>
                <div
                  className="bg-gray_401 lg:h-[187px] xl:h-[214px] h-[240px] 2xl:h-[241px] 3xl:h-[289px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] rotate-[180deg] rounded-radius10 w-[91%]"
                  compid="39:558"
                  comptype="View"
                ></div>
              </Column>
              <div
                className="bg-gray_401 lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] rotate-[180deg] rounded-radius10 w-[48%]"
                compid="39:556"
                comptype="View"
              ></div>
            </Row>
          </Column>
        </Row>
        <Text
          className="font-bold font-roboto 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] mt-[96px] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-black_900 w-[auto]"
          compid="39:566"
          comptype="Text"
        >
          Bamboo Families
        </Text>
        <Row
          className="items-center lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[89%]"
          compid="83"
          comptype="Row"
        >
          <div
            className="bg-gray_601 lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] rounded-radius10 w-[31%]"
            compid="39:563"
            comptype="View"
          ></div>
          <div
            className="bg-gray_601 lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] rounded-radius10 w-[31%]"
            compid="39:564"
            comptype="View"
          ></div>
          <div
            className="bg-gray_601 lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] rounded-radius10 w-[31%]"
            compid="39:565"
            comptype="View"
          ></div>
        </Row>
        <Column
          className="bg-gray_401 lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] lg:px-[175px] xl:px-[201px] px-[226px] 3xl:px-[271px] w-[89%]"
          compid="3"
          comptype="Column"
        >
          <div
            className="bg-gray_601 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[43%]"
            compid="39:574"
            comptype="View"
          ></div>
        </Column>
        <div
          className="bg-gray_801 lg:h-[497px] xl:h-[568px] h-[638px] 2xl:h-[639px] 3xl:h-[767px] lg:mt-[147px] xl:mt-[168px] mt-[189px] 3xl:mt-[226px] w-[100%]"
          compid="39:562"
          comptype="View"
        ></div>
      </Column>
    </>
  );
};

export default HomepageOnePage;

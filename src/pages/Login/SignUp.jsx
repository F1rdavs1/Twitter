import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "../../assets/Images/Icons";
import Input from "../../components/Input";
import Button from "../../components/Button";

function SignUp() {
  const handleSumbitForm = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <form
      onSubmit={handleSumbitForm}
      className="w-[670px] mx-auto"
      autoComplete="off"
    >
      <Link className="flex justify-center mt-[30px] mb-[43px]">
        <TwitterIcon />
      </Link>
      <h1 className="mb-[35px] font-bold text-[30px] leading-[39.9px] text-[#000000]">
        Create an account
      </h1>
      <Input type={"text"} placeholder={"Name"} name={"name"} />
      <Input
        type={"tel"}
        placeholder={"Phone number"}
        name={"number"}
        extraStyle={"my-[25px]"}
      />
      <Link className="font-normal text-[18px] leading-[23.94px] text-[#1DA1F2]">
        Use email
      </Link>
      <h3 className="mt-[40px] mb-[10px] font-bold text-[18px] leading-[23.94px] text-[#000000]">
        Date of birth
      </h3>
      <p className="font-normal text-[16px] leading-[24px] text-[#000000]">
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
        Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
        nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
        dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
      </p>
      <div className="flex justify-between mt-[20px] mb-[64px]">
        <select className="w-[312px] border-[1px] rounded-[6px] py-[23px] pl-[10px] font-normal text-[18px] leading-[23.94px] text-[#666666] outline-none focus:shadow-md duration-300">
          <option>Moth</option>
          <option>Yanvar</option>
          <option>Fevral</option>
          <option>Mart</option>
          <option>Aprel</option>
          <option>May</option>
          <option>Iyun</option>
          <option>Iyul</option>
          <option>Avgust</option>
          <option>Sentabr</option>
          <option>Oktabr</option>
          <option>Noyabr</option>
          <option>Dekabr</option>
        </select>

        <select className="w-[159px] border-[1px] rounded-[6px] py-[23px] pl-[10px] font-normal text-[18px] leading-[23.94px] text-[#666666] outline-none focus:shadow-md duration-300">
          <option>Day</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>
          <option>31</option>
        </select>

        <select className="w-[159px] border-[1px] rounded-[6px] py-[23px] pl-[10px] font-normal text-[18px] leading-[23.94px] text-[#666666] outline-none focus:shadow-md duration-300">
          <option>Year</option>
          <option>2000</option>
          <option>2001</option>
          <option>2002</option>
          <option>2003</option>
          <option>2004</option>
          <option>2005</option>
          <option>2006</option>
          <option>2007</option>
          <option>2008</option>
          <option>2009</option>
          <option>2010</option>
          <option>2011</option>
          <option>2012</option>
          <option>2013</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
          <option>2030</option>
        </select>
      </div>
      <Button
        extraStyle={"mb-[40px]"}
        className="mb-[40px]"
        btn={"Next"}
        type={"submit"}
      />
    </form>
  );
}

export default SignUp;

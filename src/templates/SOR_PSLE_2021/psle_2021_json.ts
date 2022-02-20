import { v2 } from "@govtechsg/open-attestation";

export interface PSLE2021TemplateCertificate extends v2.OpenAttestationDocument {
  attainmentDate: string;
    transcript: [
      {
        grade: string;
        name: string;
      },
      {
        grade: string;
        name: string;
      },
      {
        grade: string;
        name: string;
      },
      {
        grade: string;
        name: string;
      }
    ],
    name: string;
    recipient: {
      name: string;
      nric: string;
    },
    id: string;
    additionalData: {
      certifierSignature: string;
      indexNo: string;
      certifierDesignation: string;
      schoolName: string;
      certifierName: string;
	  aggregateScore: string;
      streamEligibleFor: string;
    },
    issuers: [
      {
        name: string;
        certificateStore: string;
      }
    ],
    issuedOn: string;
}

export const psle2021TemplateCertificate: PSLE2021TemplateCertificate = {
    attainmentDate: "2021-01-31T23:59:00+08:00",
    transcript: [
      {
        grade: "A",
        name: "ENGLISH LANGUAGE"
      },
      {
        grade: "C",
        name: "MATHEMATICS"
      },
      {
        grade: "B",
        name: "SCIENCE"
      },
      {
        grade: "B",
        name: "HINDI"
      }
    ],
    $template: "sg/gov/seab/SOR_PSLE_2021",
    name: "PRIMARY SCHOOL LEAVING EXAMINATION",
    recipient: {
      name: "NAME OF T0314120F",
      nric: "T0314120F"
    },
    id: "SOR_ALL_2021PSLE00073E2019-05-09",
    additionalData: {
      certifierSignature: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAAEPCAYAAACTJCLUAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2gAAA9oBEbmgvAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABw5SURBVHic7Z15nB1Vlce/r9OdjZCNhCRADHsSQXZEkBEEQQVURpBFRgibjjIfZFFB56MzjoqjDgIijggioKIoq6yyyzIIKCEBAgIBhCQQluwbSbrf/HGqvLfeWq9fvap6r3/fz6c+ue++Wk6n+9S999yzgBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCtJJBWQvQIXQBhwCnASOBZ4BiphIJ0aZ0ARNSfmYBOBdT2vD4YsoyCNERdAHXAuuB76T43BOBXqJK/CTQnaIMQnQEk4E1mBLNSumZU4FFwTP7gJVB+x1g05RkEAOcrqwFSJApwJCg/WwKz+sGLgLGBJ9vBX4ZtAcD705BBiE6Sok389qvpPC8E4H9gvZbwBeIvjy2TUEGITpKiTfx2vNa/KyJwDmYUasInIW9OPyXx5QWyyAE0FlK7K9BX2vhc0Jr9Njg8x3AFUF7vneePzMQomV0khJP9NoLWvicfYCjgvYKbDupN/j8Nm5/eOMWyiBER3IPpkDrgWktesZg4M+4raT/LPl+NG67KS0LuRAdw9OY8qwCxrfoGZ/GKfBLmHeWTwFYF3z/SvBZCBGDLsxCXASW0BpHi2HAHJwSz6hyXijHwuAaIUQMxmLr0yLwfIuecTLxPLJeCc5ZBIxqkSxCdBxbA2sx5XmwBfcfDszFeWYdXuPc53Ezgo1aIIsQETrFOj0e6AnardgjPhLYMmjPBq5vwTOE6BedosSTvPYbCd97CObMATbCfge3pSRE5nSKErdyj/iTOBfKWcANdc4fGvzbi1mqhWgpnajESXprFYCv4LaKfkh9xQwt0utjnCtE03SKErfK5fLDwE5B+3ngmhjXbBj8uxYLSRSipXSKEvsj8esJ3bMAnO59vgBYXeeaDXEpj5ZjlmwhRAyewIxOq0kuGH8nnAvla5hLZT2meNe0YqtLiDI6ZSQOFXclsDShe56G+/+5DNv3rcfG3jULE5JDiI5nOM5f+YWE7rkZNh0OfbHjhhUejPPq+klCsghRk04YiTfB/RxJbS8dD4wI2r8jvgOJr+ytDIcU4h90ghJPJFklHg6c4H2+sIFr3+W100gRJERHKLFvyEpCcT4GbB60Hwb+2sC1fkoeKbFIhU5T4mb3iAvA573PFzV4behf3Qe83KQsQsSiE5TYT5A3v+pZ8dgR2CtoLwCua+DaQbgRfDEWiihEy+kEJfaNSc0q8QxcNNQV1Hfu8BmBKyHzOhbfLISIwf24bZ0t65xbixHAm8F91tB4nq49PTkUqihSo91H4i6cy+VymnP0+GdgXNC+n8arSEz32nOakEOIhmh3JR6EU+KlmMdWfznZa/+sH9dLiYXoB6NwU9jZTdxnKmZRDrNUbtCPe9zqybJzE7II0RDtPhL7GT2a8VWegYsZ/h2Nj+g9wDZBew2Wj0sIEYN9caPflf28xxBsTzdMPL9DP+4xDosdLgLPoNrEIkXafSSe4LX7OxLvh/O0egxLQt8oW2PVIQCew14GQqRCuyuxnwygv0p8vNe+nP4lwdvea8uoJVKl3ZV4nNfuT5bLicBHg/YK4qXfqYRfUPypft5DiH7R7krsVx7sjxJ/ChdyeBNW1bA/+EqskViIBrgBZ9japcFrBwGPetcf0E8ZuoEXcYax4f28jxADkgdxSji5wWt3xmUE+TsuwV2jTMCyf4R1oFQJUaRKO0+nu4AxQXstsKzB64/BbQX9iv5XddgCl2s6LK8qRGq0sxL34OoDL6OxRO3DsPpKYFPgXzUhx3ZeW0YtkTrtrMSDcWlkl9KYEn8Yl0zgEcxBo7/4SiyjlkiddlbiITjL8hIaU+JjcWvXy5qUI7RMh95aQoiYbIszat3ZwHUTcYaoRUT3mhtlEGYUC2OQR9Q+XYjkaeeReKzXbmR/9wicIeoW4K0mZJiA1UYGU2Zl8xCp0ylKHDefVQGLWAIbPa9oUgbfMq31sMiETlHixTGv2QkX6/sC8ECTMvhGrf4ETgjRNO2sxH6Bs7hKPMNrX0XzpUd9d0spsciETlHiOMXOhgOHB+11mBI3S6jEfTSek0uIRBhISnwgLkf1QzRffK2AU+JVKFm8yIiBpMQzvPaVNF8AfAJue2oB8af0QiRKOyvxKK9dz296M1yU0jIaq+xQja1w2Ty0HhaZ0c5KvKHXrpdv+mhciOC1Mc6Pw3Y4r68nE7ifEP2inZXYn07XGol7gOOCdhFLwZMESgQgRJOEYX9Fars77oeFGRaDa5J6cd0Z3LMPeE9C9xRiwNCFWZfDbBo9Nc69GqfspyUow2vBPRfj4pqFEDEZAryKKdESqud5nowlgi9iU+7xVc5rlHG4ihFzUDYPkSHtuibuwVmGw4ikSpyCM2hdg1U9TALfqPVMjecL0XLaVYkH4UbftVXOGQWcGLTXAT9K8PlKUStyQ7sq8RBgaNBeRmXHjRk4Z4y7gFkJPl+WaSGaZAKwGpvGzqR8TboBLli/j/6no63G3ThjWaOW6aHYS0iIAc1knBLdX+H7M7zvHyTZAmc9OKPaUuJbpruAL2A+1nOAaQnKJETb4Svxn0q+GwXMw43CHyVZxuMs008Rb0nSBVzgXVcEfpCwXGKA0q4lOP3Rr9SF8kxcJst7gTsSfvY03PR9DvUDKQrAfwOnlvQPrnCuEA3TroYtH397ZypwetDuBf6T/ieFr4ZfATFO4MOngC9V6I+bUkiImrSrEvuGobAWcBfwfZwL5m+w9XDSNGKZnoRNo8ORe4H3XTMJ+oT4B+2qxH7RsuXBv0cAhwTtpcDXaI0TRtyUPOE0OqyhfB9wu/f9q8mKJUR7sQ/OQHQ5NuLN9/rObNFzhwKvBM9Yjm1lVWMvXMG2VZjy/wnn771d9UuF6Hx8Jb4SuN77/BC1AyKaYRKmgEVgNrVnMjd6Mn0LM2S9hfP3Hlb9UiE6n/fhFGQRbutmKdHpbtJ80Hvu1TXOm4QlkvejnKbjXgAPt1BGMcBo1zXx6zir8xhs/VkEzqK1bpBxjVr74qbaN2OKvAuuBvJfEpdMDFjaVYkXAC+W9F0GXNLi58ZV4j299h+Df9/n9T2SmERCtDEnYIaj9di6OI015v246XQtt8mHcAasUPEf9fqmt1BGIdqGArArsBvpBOUPw2YAobW5mvGsACwkasDaEKuaWMRcQhUAIUQGbI7bMnqc6i+O8bhEBWFViH1xxrebWimkGHi065o4C6bjfM2forojyXicX/S84N+9cEr/UEukEwMWKXF8fJ/pWtk8RuOs0GE6oL2971vhCioGMFLi+PhKXCtZ/EZe+y3Myyu0Vi9C6XxEwkiJ4xNm8FhP7QqIvpV8NbY/HCa6f4J4daOEiI2UOB4jMMMWmM/0KzXOHem1l2FGrZD7khRKCJASx+VdOOWcQ+0YZf//tBfz8w65O2G5hJASx2Q7nLFqdgPXjQT2CNqLSTbjphCAlDguO3jtRpR4J1wJ1kewahRCJIqUOB6NKLG/f/x+r31vcuII4ZASxyNU4pVYIbda+GVW/RrK9yUpkBAhUuL6jMfig8FCIOvVc1pXoW8xtr0kROJIieszFedGOZv6ebsqFTy/k+o1o4RoCilxfXbA+T3X8tQKqeTMoaCHgckgzE/gfzF32+tJvqSQiMFPcTHEh8U4fxouDU8ReAfYuGXSiTzSjf2tPIL5ChSJ/j18LDvRBiYP44L5p8Y4fzL2i/JrQYmBQQELdnmAaMme8O8nbM/G+R2IFtOFS3i3EJeYvhZjMSt2+As7u2XSiTyxCfALXMx5WAvsGazY/VTgb0H/GmBKNmIOPKYSTYUbhx7MuBW+fXdsjWgiJ3Rj1S7DdMThMQ84iWgWlyu9799HQrRrQbW02Mlrz4x5zea4AugrgblJCiRyxY6Y0cpPjLgaOB+r/lG6U7Hca29IQkiJa+MrcVy/54Nw+be6sZIzK5IUSmTOcCw98lm4kbaIZTY9DZs2V7suZHXLpBMRbsNNf3aPec2D3jVrga1aI5rIiL0wxx1/6vwqcAz1jVXXeNfs1kIZRUAP8Hdc3aUxtU8HbCrtWyH7iI7mon0ZAXwXG0HD3+86zJgVdwvxXpytZOsWyChKmITbJqhXdynkTKJv6CKwX6sEFKkQbhvNIvp7nQt8hMbSJYf3WIlz5W0arYmrsyPuFzQbU+hadAFHVugfX+X8AvY2noJtOTzKwHLNHIf9/JtgRp53gNcwq+684HPWjAbOAT6Lmyr3YZVGzqbxVEth/rV3UFhqKpyNe+t+Kcb576F8g7+IbT+A/RHsjI3Wt2BBEf55d9PZDgBbA5/HCtGFy5Rqx3rgOcxN8WtYIbvErLkxGIxtD/nlcotYBFszbpOPB/eZiVyeU+Fq3C9v/xjnn++d/7LXvga4GBtdSl3w/GMVsGmSP0DGFLB99q9hhiDfCaLRow/brrkROBEbvVtBD+Yu+RTRF/Jq4PtE86f1hy2AM5CxMxW6sYyWofFio9qnMwJX4qUX+An1/zCXAC95nxdSu2h5uzAS+AxmxPHdT/1jGRZM8nvgPOA/gO8Bv8Lirl8m6vVWeqzAtnNOIhmFHoVNmZ8kqrx92G7DLgk8Q6TMBNwf4HPUtx0cQfnIUfqHtwYrafodbGTfCPid9/2Pk/4hUmZz7GcLX2b+0Qs8j81WDsLsBLUMQt3AROAD2F5speWHr9D3AKdiI13caeowbJp+MRYnXnrfp7Hfq+xGbcr+RKfD1Shga+FHqfwHFo6wn8f+yP0/3ANwyr4YlxK33dgGuBTnY+4fCzDF3YPmlWE08HHMdfFtKr8o12G/i+8Dn8RsEFOw0XoqcCBwOvbynFfh+j4sm+nJOK870aZ8GfeL/WqVcz4A/IHKa71nMUtzkcpulxtgjvHh+f+eoOxpMR24HFft0VeEu7BRrFWKMBwL57sCU+j+rrXDYz1wB3AInW1cHFD8FvcLPtDrL2DKexeVR4I7MI+ewbgp2krKp3jf9q55mnRqKyfFFsAviTq1hMuFnxMtd5MGPdjM6SKiBsV6xxosZPA0YLOUZRYtZhAuZKwPW7sWMCf3myj/4w2Pd4AtvfuE2wnriG7s74ErfdpL+ziDjMQMUGGEVngsxxQoDxbXwViO8BOxte51mKHsIewFexlmLT8I26fWNk+HMhFnGX0Jy9RxNW56HB7ziXrxXFdynxtxL4L3Bn1jcWVRi8DPSKdAejN0Y04sL1BuYT4PG5mFyBX74v5Ql1C+1fEmNiJNxG1D9VLuBHCud82nsXXcTV7fXOL5Y2fJtpQvHdZhL7Uta1wnRKZ8hcrT5WWYC9644LwjcH/cT1BuEDmZ6Ij7R+/zChIMCm8B3Vg2iqVE/w/+iq0/8z57EAOUQVg42auUWy5/jhVV83nMO+fYCvfbncovgzVU9rHOC1sSfeEUgTeAz+HipIXIFQXMuPQY5d46txEt4RLyIe/cuUSDvUOGU24tXUq8jJlZ0IUp6hKiMl9PZ7mDig5jKubMUcni/BSVrZcFoskCTqtx/49jzv5LgJtJf/slLqOAXxN9ib2BzTC0bypyyVgsB9Jyyqe6YfsXVa7dDRfI8Hpwr1oMxwxYeV1H7oCrbBHOQG5BVmeRU3owp/lSl7slmNfUj72+z1W4vkA0uunbrRe5ZRQwG8Ai3M+zGptZyF9Y5I4CtnXkG6NCo9WVOKPVXbjRqFIOpO1x+8VLsG2mOM8ehDl87I55gB0Y3L/SWjoNhgIXEg2NfIVoKVYhcsNW2Lq31E3yAaLbPD24UWkRlYPQ/bzB59V45hbY3vD5mLdQtQic1Zi3U5rO9psRTeZXBG5HpWZEDhkFfIvy6JoXgaMpN9jsgBuZKpVe2RbnLrmaaBzrKMx5/sdYyF0118xqR1phiPsSXUqsBb6Jto5EzujGRsGXKV/3foPqaV5O8M79YYXvL/a+vxgbuY4FbqD6SBtOzRdiU/nf4hKL/xIXs7yG1jp/DMF+dt9w9wZmPc+rwU0MQAqYj/J9RKfOa7GMEZvXuf5S75ojSr6bQtTx/y+UBwKExzuYO+YlwHFYyF61Gk6+a+a9tGY7Zxssf5f/f/I48YrDCZEakzCl8dPB9GGlJT9AvNHmaZzS+37B3cAFVB9pQyeOmzGL9tbEj44ZQzStzydiXheHQcC/Eo237cVmEWkmnROiJkOwxGP+Nkm4f3sS8dd6Y3Dr4ReD68YH9/b3UP1jBTY9PozmAhlO8e45k2S2d96DzUh8ed8Gjkrg3kIkQgGLCZ1DubX3XCyVSyMc5N1jFrYX7Gf696fmt2H7q0mNZsOwPF7h7OFfmrjXJGzrqDTbxo0o8F3kiHdjIX3+Hmdf0Pfuft7zu1QebUsV+J9ojSHoWNya9UUaz3q5CfYzlM5IFiDXSZEjxgI/oHzL6Gks31Kjf6gjsWii26icWnUJFjscfr6J1llyB2PGsvBZ/xXjmmHAPlieqVIj22qs5Ga16hNCpMpg4HjKQwTfxmJ/G/F66sbS41yElQwpVdxeLGb23zCrbpgnaz02CreS/XFJ99YQrXlbwCzc0zGL9y+wwIpSB5a1WNSRCpuLXBDmtSr1Lgor0U1u4D6bYkaqmVROcBce9+Msy1/0+u+h9fmYClgOqPCZb2GBCLdio/TCGnKvAq4CdkX7viInTMAC8UvTwf4f0RGqFsMxa+wtVJ4ur8f2T//g9Z3jXfuy1/+hJn+euIyh3FhX7egF/ozViYrjwy1EKvRgBchKDTTzMANNvdFwKHAwlg+5NLg9PJ4Fvo5z/vCjkg4O+j7r9T1MuoahTTFfb1/+Xmz6fz+2Z30k9qITIlfsiimMP91diWXzr7VlNBZTvkuwNWyl6fKbmEfWvkT3jodg1uBwPTkOexH4id0/nsDP1igFzHA1CVs2jApk1VRZ5JJurN5OGFwQjjy3UzkTxmgspO/LWC7h0mRu/gvgVizYodpLYGtcsMIT2Ej/Ge8es1BuYiFq0o2NkP7oOR+zwI7FQvoOxKbYP8LWxKVT7dKtlfuC8+PkhTrWu/YizBI+E7f3fHTTP6EQHc4ZlCvifCxAvVKBrtKjD4sgugHzEy7NSFmPS7x7HYkV4QpfKM9gSi2EqEFpatQ4x9vAnZhDxD70P6C+C2cJ7sNeAH51w5P6eV8hUiXrXEqXYwWcx3l9vZhldhG2N/oiFmj/PBaM8FxwTrNshotWehFbf4cpeeZi2R+FEDEYho2CU7B17Migr9UvmMNxo+7lWLqe8POpLX62ECIBzscp7RW4tfA87EUihMg5YcBBL1HvrLMylEkIEZMJRKsdhqPwm0TX50LknoHqyLA70ein0BPqp1jggRAi5/wP5VtXS1DuZSHaBj8APzxqJYMXQuSIjSkPTVxD495eQoiMOJTyUfjSTCUSQjSEvz8chiBOy1QiIURsCrgopfC4OlOJhBANsRHRYmdrse0mIUSbULoevh1lyxCirbiQaPaQ/bMVRwjRCIOAJ3FK/BCqjCBEWzGZ6Hr40GzFEUI0ygyiCfDiVkwUQuSAbiwdbqjEJ2QrjhCiUQ7AhRuuR4nXhWgrCthWUjgK/5WBG4IpRFuyG9GaTudmK44QolGuIurgcXDt04UQeWJbLMzQrxAxIlOJhBAN8SOio/Bd2YojhGiEjSkvtqZMlkK0Ed8gqsDrsWoTQog2YAOsVrGvxPOQl5boQDp1v/Q4yh067sa2moQQOWcIVpa0NI/WMVkKJYSIz2GUK/AqrAqiECLnDCJa3TA8HkMZPESH0mlr4j2BvSr0h8XMhRA551rKR+Ei8P4shRJCxGM6URfL8JhPtHiaEB1FJ02nT8Es02AlSkPuwwxbQogcszFW1TCsq/QYbiT+dIZyCSFi8lWc0t4MLMBFLSmLhxA5ZwjwKs4/+iycQj+AtpZEh9MJa+IjcI4cjwCjvO9uQ1tLQuSaLqLr3yOBx73PO2QnmhAiDvvgFPZ5TGnXBp/nYqlqheho2nk6XQBO9T5fDOyLCze8BVsjCyFyylTgHWzUXQSMx9LvhCPzAdmJJoSIw3k4hb0Q20pajlPqIdUvFUJkzRjMKyssUbot5tQRKvVV2YkmhIjDKTiFvQlbH1/t9R2VnWhCiHr04OoM9wEfwXJqvRX0rcDWx0KInPIRXHG0OVgiAL/vzuxEEyJ92nGL6RScK+VPsDXxJ7y+G7IQSggRj21w20pvAWOxkfg1XMDDlplJJ4Soy/eIbisB7I2bSv8ZBTwIkVuG4RLCr8X5Rfv7xV/ORjQhRByOxinrvdiI2435SBexxPDTM5NOCFGTApZmp3QfeGev73FsfSyEyCHbY1boIvAKrsbwt3FK/M1sRBNCxOGHOGU9J+jrBmZ5/TtmI5oQoh4jcAatdZifNNjo7Dt9qOKhGJC0g7PHIbhkd/diwf8Ah+O2k65HFQ+FyCUFojHCRwf9pVPpnTORTghRl6m4qg5vAEOD/h2wrB1F4FlklRYDmLxPp4/BBff/BlNogE/iFPc6zHIthMgZg7H1bxj4v0vQ3wXM9vp3zUQ6IURd9sdZn2d6/TtiRqwi8BzylRYDnDxPp4/DKejlXv/huFS0v0fJ4YXIJWNxBdJWAJsE/d3A33B7xrtUvFoIkTnH47aPrvf698S5X84m3zMJIVIhr0pwrNe+0msfiZP5amzNLITIGZvj9oDn44IdBgHzgv53gGlZCCeEqM/XKc/eAbCf1/8wskoLkUu6MQ+sMB3te73vfoZT4i+mL5oQIg574xR1Fi4yaRiu4sNq4F2ZSCdEDsmbYes4r/1rXGTSgcC4oP0A8GqaQgkh4jEaV8VhDTDZ+y506ihi209CiBzyGcrrK4GVZFkW9C/DHEGEEDmjANyNU+LDvO9O9vp/k75oQog4TMNVdngTFzfcBfwJp8QHZyKdEKIuftbK873+qTjlfh0LTxRC5IyhwEuYoq4HdvK++waVlVsIkSMOxsUNP4IzaPXgHD96gd0zkU4IUZfrcaPt57z+fXARS08iN0shcslkXCK8RcBG3nc/xyn3l9IXTQgRh7Nxinqp1z8aWBz0r0JulkLkki7gBdyad2/vuxk45f5D6pIJIWLhhxbOxOXNArjf++7Q9EUTQsThMpyinub1TyNaAXGD9EUTQtRjBGbICte8m3rfnYtT7h+kL5oQIg5H4xT1Ztz20TDgtaB/LTA9E+mEEHW5FqfER3n9vnLfS/7inYUQ2FR6IS6n9Oigvwu4h8rKLYTIEfvgFPUO3FTaL8+yABm0hIhFFtPVD3vtO3BlWD6L22a6AliZplBCiPg8jBuJtw/6xuOs1euw3NNCiBwyEpdHaxFuKn0mTrGvzUY0IUQcdsKFHd4V9A0jWof4g9mIJkR7kvaaeBfc6Pt48O+hwFZB+wksHY8QIiZpK/F2Xvvx4Pln4BT7PFQkTYhccw2uRMsewIdwftJzsam1ECLHPIZzqZyM22IqAqdnKJcQIgaDMCeO0FNrT5yR63WUFF6I3DMaWIop7Uu4qXUR+GaGcgkhYrIpFnZYxJR5bdBeDEzKUC4h2pru+qckxhDveSO9/kuw8EMhRM7ZEjf6hsdSYGKWQgnR7qS5Txwqrs8FmFFLCNEGjMKloQ3DDUfWvEIIkTvChPCrgEMylkUI0Q+GAgdiGS2FEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIkXv+H+fHsVPGcXTmAAAAAElFTkSuQmCC",
      indexNo: "00073E",
      certifierDesignation: "Chief Executive",
      schoolName: "SCHNAME OF 1721",
      certifierName: "Mr Yue Lip Sin",
	  aggregateScore: "193",
      streamEligibleFor: "EXPRESS/N(A)"
    },
    issuers: [
      {
        name: "Singapore Examinations and Assessment Board",
        certificateStore: "0xeDe1B6Fc03f1a9C6905C93a2fceb06E19624a55E"
      }
    ],
    issuedOn: "2021-01-09T16:53:44+08:00"
};

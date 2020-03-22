/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('DEU', {
        type: "FeatureCollection", features: [{
            type: "Feature", properties: {name: "巴登-符腾堡"}, geometry: {
                type: "MultiPolygon",
                coordinates: [["@@TB`bjJTooLiUWL"], ["@@Y@SZfEHS"], ["@@jGjY@O\x8bTG^"], ["@@\x94l\\VVfPxXd\x84xRXZ\xa2EjXbHZ\\RNZgP^b\x86^jdtTN\\]TkPH\\jXdbNZ@b{_MFBV\x80^BVVlQR\xa1DQJDT^JBZcbg\xa2KPE\\RZAP`@DLr@d]ZC\x82qLWTQrQrFLRTF\\ZSdO~QAIVJLtL\x86FrNVOcOfGPMCMYGBcN]ZKH[^IDKxIPIZDhGhZPIAcZUdP\x84JXGPS@OqeqdYSWGNeGyqG@a`MJTX@VU^PPRlVNf^ETHLRlJg\\DPbVZ\\\x96FTKzDNh\\V^KlBN_hNUb\x7fRChdAFbdG\x8eLnK\xbaPfXP`dLUVHX\x8ablQ\x82X`[nDVRIN]XpfGXDRaRCTgG@iWC_HE\\pN\x81LeEORPTS`XHz@^TlQbN`Z^ET[\\EPFX\\lDXKEW\\S`NXIF[`@QVAhdFJI\x8eJ|RFUMGLU[UPQKGG]LOSGKWNWbGxHBpfF`NDYLSb_\\NF`xXbArUVOJc]eXSEMrQZgFY{[PcUOkSVQrK^\\CRVVpNNKO_vEFWMGNSGWKKPSW]ZQrGPF\x90F\\GVJV`hNAVWPfNFTnCTU_OL[nH`Gicl}sMCQ^KrIFYRKRkLMiGeD]STOEUU_dehBJS[WTa\\KSOFK[MUPMKTyAQ^cY@EU\x82KX]PDXMVYtB^WTANUGUkQIMk]d@NOnDGWXSMi\x84YVLPSnOrFAYJUfATGAUhETMMY^Dbq^MNgYQeAAIbGZQMYLGIoeG@QjMEeKMiQPIL]eGRaMIl[HMnEFYTUFo_U\x81QiBXR@P^XSP_@kWEgiGMSUBGrSP[FQMmRSR]BJ_aKNQQKRWbM@M`MDQt]EKm@G]ZINe@SW]DWRM_K\x93A]SIcc@}WS[SG\x85Ia\\@NYFIOYMoKqDOCN[UM\\MqYG[mSogRUXNXMIQHOVEF[\\S\\aFSpYEQLgMQNkTECORMBoRmT]DYdaXGA\x87PCB_M]QWN__[DMMOBYiEOK@alWG]L[QIDYKaMQ[AJUhRFQSI`UNU\\MDOcGIQ]DMKkU@IbMCI\x84SCoJEE]RS^MUYB]_Mg@AMWQ[TQdyME\\wIgaKSSEsHMGaN[@_J[V[BiEYcYM[BI]aMo_KU]ZOQeI}FMNY@WOQ@CUSAOUaFUFeEmFmhS^EZi`QDmEePWBYPkF\x95Q\x9b\\\x9djwdUZEbcN[F\x8bbcF]Z]RoNsbkFQYvaXUpWfGt_ZDNMbMLSBgTQZIbsUGuHiJkMYHEPaZIX\xc7tWD{`OOwBaE@S~YjIZU][[GMK]CkUSB}QgHC^YTUBfriCCPYFSE[bERUC_[UEAWxG@]GY\x95`mDCHNl]FMRX`bBBL[TYFgSKFMt]HUZMCIUJKOaUMWTHRQNPVUPeG[DWPK_ZEFO]GML\xbbYMD_QKSWKKUJ]Q@gWQAYY`[]SNOV@lYZATW\x8aLjCTH@VZP^FbQ|VDQVGRSQUMVQBQODYNYAMi]iJRXYXgD@JmFO_gG\x81cVYlFLKaG[K\x89IyTcW\x83Lg@\x85lDXQLs@OJ\x7fMER_HYIQUmUWBUGIOqAMKG]QGgLYCWMsIqL_AiFOGKS}HQZFTeb\x81@]ImLMKGYaY\x8dQMG}CmSe@UFOTWFQT~P\\PER[TkJc_SI[B@N_LHXaZ[lqZefChKTFNt^LPD\\a~@bd\x88X`DXOhJ\\hXFVApNTf\\^jMhW\\\x81vCNJfGvTdEbLRXJLRFhxtXjfVPPj\xb2B^JPZRtNZ^Y\x90CdLdr\x92Ld@lFLrTVVAnBzGZD^rv\\v\x96bVL\xce\xb2HPBp^RhCbJNf\\P|@n`^fHbh\x8ev\x84\\XfjPXRHzL"]],
                encodeOffsets: [[[8867, 48836]], [[9403, 48800]], [[9258, 48853]], [[8431, 50142]]]
            }
        }, {
            type: "Feature",
            properties: {name: "柏林"},
            geometry: {
                type: "Polygon",
                coordinates: ["@@rTTR[ZD^NXVF\x92|sVsEDZVv^GPfobhH`PvQvEBLaVfjVF~@PZ^BAhrAMKRUB[zKh@hLjfvYTFNVfA\\LmR`JlBDYpUT@K_WGMiTY^@rI\x88eJg|IR]\x80@DGoYi\x81FS~PhI`OfB^GZYvIWO[mROKMaAs]RSMOkA]]O[YRN~]HiO_jyKyB@NgL\x89KWrO@\x95[RiMS\x81BAV_Ly\\\x7fQ_`oSo@GbmAuI\x8bYAQ\x85FcZaDCP"],
                encodeOffsets: [[13403, 53678]]
            }
        }, {
            type: "Feature", properties: {name: "勃兰登堡", cp: [13.04, 52.978]}, geometry: {
                type: "Polygon",
                coordinates: ["@@b@bKfFlKlHrI\\HQ\\DXdGRJbIlHpWvEt@\\JPRGVbjY^FdOLXJpBd\\ZDZXrEPJ|CTD\\WX@D]jDdP\xb6APP]VYDON\xa6C`EHNhTNP^D\xa2AhppGJLb@JJCdKVrZ`HIdvFHotEDNtCNVVFJYXSfHHVlATJ\\alanF~@BG\x94UZMxGLOKOPOxGJW^YfL\x84AFNzDhC\xb4clT\x8eAJU@Y\x9eKNC\x88@QaSKhIFIhEpN\x82FPH^YhQp^jDHKdEFXxAHM\x81YfGDMb@lF^LCP\x88`j@\\`h@EjZJbEJNvLhAN]Z[vIRTT\x80|ZjV\x90OpJT_jgZLN^TLdz^BPSpFvx\\BIfLZQBT`dGZnMZXBZP\xaeLRVC`LNXCVZ|VhZ^D\xb4QdHhZNPeF_R]HAbPj\\ItqtM~UK[XKSW\x96c@Q]]`SzR`A\x90JJI\x90AH[NEtDZPX@`h^A\x8aahChF\\RdWIOLgYwqs\x8bq\x85co_YorA\x8ePtOZDXO\x8aDfFGd\x92T\\t\x82CJHrFHNfLZ@FIQ_PMNupAHa[SISi]EWQKkKS\x81HU`]Q\x83MKC_e\x7fYScOaY\x9dqkQ}O\x89YIKiKGUZ\xa5PUE[woMQH]^K\xccKVGxk\x8ci\x96WnQTS`MVW\x92{NYrQVY\x9ce\xb8grU\\YN[lSGSeUCSS_ZkfSEQiYAS\x81qgE]WD_Y_hsAaV]CS\\MTaQQ@Q\\MJOhCxO\xa4OVK`cOkk]BOd_CQmgD\x81j_dErY\\_[YHWQeugNOIYQE@]\\YCUYMAW]aDKwSSKGW{_WADUmQBc^_\x8eOTYBaLOGeX]PE`]TGv_VWPAV_KQJMEcZ_GQiSWWi^YBRiSAQcYMSFs@uIUXET\x7fVOQ_EGSqKaJ\xa3EEY_@mKmH\x7fg_ADO]SI`\xa9\\\x95@OL\x9dB\x8fFMOL[uBOMG_kU\\SaM\x85PKIn]EQVKcK@kcS@YaDISQEFY}FDfUFkO\x81MMIcEiNkBkYaFmGGOkVaUWHg@aROK[PKIkC\x97@W\\aFgKuLIf\xb3RDT\x7fHOP_LUZYUeW\x9dNLUcGCIoMIWgDCK\x91@clDZyC@LbLXZANeVAPjlHXK^SXKlsB[JKPjjMPU@qf\x87QEN\x7f\x80Ė\x8eNJOhZNjCO`[TWHNTUJEN\\TClHJQZ[TYlGXxDCZaT[KiG[BSI\x8bF@hPT\xb5F]EFhiDJZ\x97HCOgGOP\x89@CrKP}I\x8bF@ViVuD\x85^[@SRaBOKEY\x7fEDSY@\xbfFARQVuFgVG^iBUaoD{bOP{FWZaPav}VQ@OhMTaL[fFJcPX`b@CTVTILZJfBZX\x9fjRZCZXljtJBflqjdLJP]PVR@VwNdVENZJ\\dBTRTaNHV_LiQS^OFA\\mLOcKK\x91CWREPlb_N{QANRNNbn`OL@bGnPFjI\x84VF~JXUVUdNHgRAVLXZLGVSDHhRBNbdGDTTRY\\Y\x84DPgDk`iY\xa3UTX[T\x8dDGRaD\x93@]CuS\x81XaH\x83Bk^\x97FQRFPfXFVgPcA{LU\\SPyJ}UO@WR@\\WR{GaR`pUH\x81K_@eLeVcIa@YHwfeP\xafM\x9bacDgf{^cb@^", "@@DObCdY\x86EBR\x8cZvJnBHap@pT`_\x80Rz[`KBU\x82ANTQj\x96\\P@Xq\x8aLhK@MzAzL`ijP^GM}ZQP\\^^lBNPQTt^bBLNQP\\nXPuJYZ]HeA_PgJ}OETj\x82pZCH\x7f@Q^{JIh\x87fqJ]@SZNjXHL`S@oVCZkA_InQ[KeBMUSEuZiegKg@yLA\\QVNLqBBg]AOY}@UEeibUAKuFuR_OgGpaOe]HUuCYtFtU\x91{UEMWC]\\YSQqS"],
                encodeOffsets: [[11540, 54396], [13403, 53678]]
            }
        }, {
            type: "Feature",
            properties: {name: "不来梅"},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@zBZYVA\\OrTjIcYAMXQbRhJ|_FIxDZJzG\\afD^OXF\x92D\\]XKRS\x8aD^CPXhPbIvk\x89SVILU^CaYJm\\aQMsQOKCWiCgDWV\x9dKaFYT\x7fR[PkMWMkXENDpUPmFURLNaNI^j@jIvCnYdBuZ\xdbVeRIPChcN\x85J\x99^_RgbQX"], ["@@`B\xa6UPEhTZDjEIQk_XmZKBQMKDSV[mSAKaOgEcH[G\x89MoMFRZdTJ\x88PRRNhgb\x8b\x92WPXF"]],
                encodeOffsets: [[[8693, 54506]], [[8725, 54893]]]
            }
        }, {
            type: "Feature", properties: {name: "巴伐利亚"}, geometry: {
                type: "Polygon",
                coordinates: ["@@PDfXDLzbPV^B@OfYZNdGRLtBJYXATUGUJMtD\x88c^Eh@`SIajW\\mvGPIi]NS\x86KZDVPNKF[^U^FNUGM\x84EVVTAVSGSVO\x90GQmZcOGIafqUEXktAnPBOtATUzKNPGdJjbGBKdAdP`FNWdCjLNTAXKJgPoF@VOHgAYHidICiNAXZLBVS@G^pAVIVJFPVBVZhIv\\~KPPfCXQ\x8ePnaFQj_XF@X\\AxIB]\x88NR@R\\vBHObSpeAIu[@WVMDO\\BtKUS^CDVPXv]pOZPAZINXLG`@d^BU`dP]\x88UJVhA`GPcLRPSZDRRHnAtPb@Jld@HVpDdO\x88Bd_MO]DHWO_PKEcjIVO~BN_U_\x92IF]\x80BZJDRtNZG\\U\xa0L~DVPjGz``GTN\\@rcBS\x84VZA`\\lFbNvOCGjYf[DUKM@g\x86E^IJWTF\xa4MTOtWMOHOZMDQuMk_bKDQfKxENc\\BFM\\MTST}akJuXQTDZSXCl[K[nQ`FdKAMZ]RP~i\xb4eVMGQ|Tb[ZBHWEWQ@WSP[\x86OzENGFeUUcSEYOS[C@g]JSQ@eQILOEa\xc3oCQXiZCHUV]\x9aWBKjE`DBQPWWoTsdH`CFmZUKcHSjcNQvKTHLSGkH_QG\\WRcC_pQ|CLSfIr]HYEMTS^MGUrM\x86AVHzWXBObtA\\K~@RM\\E\x92ybADaIQP]l@J[jERYEKvSE_fMj]lQNQMiZSnW\x80Q\x92NZC\x8ckdODMtaNQ\\E\\}KOTYMalSfU`GVO^GVQ\\@AxlJ^KvCVJZUGKZW`HJO`[d\x7fL@T[dC\\F\\EjB\\[@OhwRDf]CEhcM[JSvEEO[MIsMCQWfeM[L]KiTODqSGMYOKLUIS]Mg]YXWiH]]IKWgHkXiJY`}LgZQD_UUFqZUR_NQ@MSJG[OcYWC[TUIAQZ]GWV[}\xa9BOX]CMc{CWU_\x8bckcye\xb9oYE\xc3FcG{UiGyB[EmS}OUKW[\x8buaIy@\x9bGMGK_W_[GQW[@YIWmkJakHkR[PM\xcc\x93hc\\\x93RK\x80ERIAUh@J_rwbubeDWcYo\x7fmgJ]OIAS]IacPSjO\\FTI~@^LNRTBVMdG^_dQC_FSTQPYCYmaSURYyICM^gsqXKHWBoiIIQ_[I@ifSQeJ\x99dm`MTmJIHG^}AoZSXIV`\\GJ`XdD\x87lQAmjjPKL_GYZYHaESJwBWAWQ_AQJwGisO]\x8dHqUY@OXuZW^YTDd[JwI\x8dOMLeN\xbbQ]SOB[`JbflOTOAmooUMB[Oi@Je`a`oTyKOeCIVcCkOUB]L\x81CeR]GUFeKMX\xe3UgB\xa3WS@Ogc@\x91JQH\x89G\x9bDeKmBcRUOsKO_MII[Fg_W\x8fI]D[McJ\x83AYPQCaWW[YKOUJIjALgu@[DUGOHeBicuIAgcSSB\x93CT\\ldGHoAiFMKeCmIaMYCK]MC\x91@wCsFaEuFSFDdZHAR\x83vm`TPyLoK]DA`jTrLSHY\\EN\x8bG]OUF\x81OcM[L@PYT\x83BOJ_BIV[H\x95@aPgFOSSGBOO]aH\x81C\x89JaVcJ_\x81DUSSRapKNWI_ViaIEQcKOU@e\x83OQME[{e@Guy_B\x83e_@MKaGUMSJkBuMCRL`X@XJ^XIPWPJT\x82\x8cO^aM}VYK@]gIWBePgic\x90HH_TFNhDZZY^C`kGIPUF@Pa^sMW@YbPH}fFNSN]DkM[VyPMe]HKN\x8bNTXIXNRsbkC]ISS@MQQeya^iAgRk@oZeBMZbEPVTBDVR@XPZ@NM~EfJPR^YLVp`bNJ^\\AZNZdjF\\A\\U`I\\@bMNHtGTFLThbxJF[zNRc\\SXRBNh@`NA^VZ]NQTF^IFDp\x83TDJaN@JlVNL^CJRdHCP[NMV_VTJERgQIV\\BNRLbCZRJK\\H^kX@bPLjFAZNPCN`\\M`RXN^A`ODB\x88WHcbCZS^QnApQNDPSFMlNRKhFRoZET[b[TE\\UFGPJRWNWMQVphnTH\\rZ[NVNM\\PDrCpLZNJPZE@Mb[\x86JTHT\\~Xd@Jd^T\x94B`LQNCXX^@TMfYJH^n@FLs^CR_N@NaNQXRLMRbLI`^ATQnQRN\\ETOHqVANTjHFhlX`@TO]W@OWQjA\x82R`VEpSVEZmFGNk\\NJQbfHK^OJjRLNFfiN@RfHJpKHNZYRaHBJfBZRMh]Nar]CNZSNgFBVSHeBIVBZqEmPOTUK\x83ZNjWTHXmCMPc@l^JNlRHVMVSB]XsAUZWNOCW^\x81LFVZ@]dBRSzNLVO\\NELTP[LSb\\XITgAcfV`FVSP^TfCjHKNQlQLEZqJ]LDRtNk~jd_HmGK\\`PSVmDESeMXOBUgMU_UI[H\x8fEOEqHYRX^OTLLHXMTNHEXuFP`MLoMUUDQ][qLURlTVPOd|\\EZYhqRFNWT^fIdUPqVaBwWE_[Ma`KTCZ_MeEAowGaHMXLXTHKPH^LHOR\\VKVNHEV{Q\x8dIIJcEBgRU_@E\\WJ_M[TFXWLkCW[OE[FS\\]F_YaMkR]Sy@WGT_OSPQfF\x82KoMF[`GXD@jhHDSbQCQHWoe^WJMUQmC_\\\x81WkR\x89aGWVUcKO_eW\xb9OmL\x8dKcHgra@C^HL\x84hEVJN_T@jNL\x82JK\\ZDVn@RaPkFL`^FNLKZiFcOG`SXTRGZcOUXYEILNTSJZLQZ@Z]dR`KZBbMhAZtBNJ[PDTS`DXKLgD_GYJAL^bN@ApjhzH\x98BPPpDrYVE[_\\@jr\\LMZ\x9aR\x82QvHlQjPZQ|A\\WVkf]pDTJ`AbL\x88ALfMVIl^LRVENmBMJFfRROVATMJP`bQ^BRUPHvHHOnCdD`VfEZPyRP`\x86^nDNRrTZ^GLHl]^TLb\x92OZRVdKXLhG\\_fCfK\\VTS\x8aZxZVATXfRVdhLtzIHJb"],
                encodeOffsets: [[10283, 51729]]
            }
        }, {
            type: "Feature",
            properties: {name: "汉堡"},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@NhEJjjCTNXVQ`GX_vWXHFN\\DRT\x8e|Nb^DpCjGjAJTAXTX\x9aBPIdDBxX\\\x90MJL\xa0f\\MLOU]KFeMD_aY\\KbCvkQQjCPS{[P[A]}CYII[XQSMJWPK@OxSr@RMIMfED[xSFQ~[tAaawSaGWMQYWIyFwAsX[\\}HU^_XUFeROKDW\x7fI^MOIsGEMa@_N[B}YSBbjKV[TSA\x85go^\x8bfHrkAFPkPP\\NFYbRZ\x97H"], ["@@lQeSYDFXNJ"]],
                encodeOffsets: [[[9965, 54844]], [[8701, 55226]]]
            }
        }, {
            type: "Feature", properties: {name: "黑森"}, geometry: {
                type: "Polygon",
                coordinates: ["@@NVTART@P`nERQHG\\_JOl\x8e^nt\x98nXXbRXVj@HUTM^EbH~ELX\\DD`\x90j\x82NSjZTI`\x92tFNlZbPgt_EpniRIPNNlXZCRP\\C\x8a@\xb4MvX\x86DMRgVFR\x94plbMJ@bdVwTEZUdP\\QDITsA]K\xabMEO]MY@[PGTq\\TThVfdJTRDFRbNbGL^ZDTPKNrN|KxL\\P\x82J`C\x88U\x8a`v@nGHPCZNf[F_AF`OZgZEVTNtJfN\xa2V~BbU\x8cD`Q@M]mRIAUdM|H\\I\\D`hTF\x80MBlPRbPjBh`vCPVI^Z`XNZbbPHTYFed\x86VxBlFZJZTILZElRjDFKO[LMXI`@bZbEZW\x92JbAVI@YZIXYhKPOIYoL]TiCDWjc\x83GNIG]SKaDMKZQR[jgfO_WAY^w[OeEeO[HGOaYHM^EMOeCP]RMZDh[~CJSxIbC\xb0]\x86XNfi@QMgfMXc`rLLCjLXXvHXAOfPFnA`M@gZUZAS\\FPQPB\\dA\x82HPSnaE_IQD[bcLgSQRIZFVKZ_lFtQVFhICOWGFQfMJq\x84CNMdH\\ALW^L\\EfY@IpK`AQWgQ@QMITQMSJ[WMUjcjmOeAZgXMnAEUseP]YY\x80URAlUAMZKUasWYBiGcNBRYF]KsJ\x85DQCWeHabQP{sFYKiRQI\x81LViZPZOaWVOf^bEhMNa^K@M\x81[KOHUXKQUkFEKoJwaNOWOAMVQYU[KOSfGFaUaoeZK][W@WSEQLUMS@U\x92DRMfE^FRXaZIRZL\\E\\P^FfEXDdChcLaNKAYMCaPi[X]@[GUNYRI[UO[D_IaJGsygKUceQSWUBwY\x89YST[UeLeD[`gHWKcLQUPYa\x91SK^]GkHKY]qSMQmC\x85]O_zQYOeF_UcCmDGPuGOGQV]AaRO_NIBSPUQQEeNInAFMQU]KJkNUKe\x87BaK_BSIoCe^Ul[X{BYRiOkRuG\x81R\x99QNY[Kiq[@\\`UFqZoCOO\x97AyGigBoM@]aBKZI`HhCLKCWT_CS\\OMIsABYNgAaLYQ_^c@YRYYKTIMSJKZFVWdPHYSQTWH_dPjELYMK]EK_lEbO@QUmYCL[\x81IMK@i`SIMFU\x83gGKD]b@hqEacBDg\x80QVagMM`kA]L[UMgyCSL\x95EY[aUCOh[kIKQSG]FMekUOQ]OUVW@IS_N@brHHzMfXHZTrcrf@POTWH\x83IcOYVBdOJgYgHYCOJwJCL]JG\\YLM^AdZHDNONeHdPUPqM\x85EsKIKJURBP}Tc[YSEKQqEqRSRKX\x81rYDc^q@CK_@UdmdORW\x82]lN`\x84^rHfNhlhZAVUDoGgHOPOhwxARNbSXiHY`ARXfDRWrAPS`qhcTc`wdSH\xa5J\xb1U\x83YkK\x8bE\x83[\x83U\x89I\xb7CWRMtQPcNqdyZON\x80vzEPJOZn|~[bPZM\\YIzP\\QD[TmVCZvZER\\L\x80NDLdD^L`BVUnENZbLgXYbTRfFjM\x82K^`BTI^_RJXuTGbgtgRg@Lf\x83Aa\\PJD\\NXTBVPohCTMLVVMZTVbPf\\DL\\JnIHWdBdIRXpNILh\x88GRgLVXDX]TabFdZV"],
                encodeOffsets: [[8321, 51903]]
            }
        }, {
            type: "Feature", properties: {name: "下萨克森"}, geometry: {
                type: "MultiPolygon",
                coordinates: [["@@JEHqIeQUAs[IP\x80EpBR\\p"], ["@@arVH`@\xbcLjHbA\xa0Y[M\x9fA_OiIhOAMaEq@\x87\\"], ["@@SGWFFXZELO"], ["@@\xb0FHO\xc7IKC}B\xa3M\xa5ECL|F\xdeR\x8eF"], ["@@OD[VTDX]"], ["@@sI]X\x80VfH\xa4A\x86F\xc2FXEBQ\xe1Y\xab@[BQK]F"], ["@@PU[EULSRXL^M"], ["@@xUzKvA\x98GQYZaMEO[lOEOlBGq\x8cep]\x86hTB\\SLUaiTA~Z\\A`Mb@FNtHPJ]N\x80JCXPLfQVE`WV]~G\\[tWxBzEXJRZXNbHxThO\xa0@jW\xa2ilK\x82YzG\x84CTM\\C\\HVJpF\xa4ErDrWZcfAZ]tW\x82CLMbJjZbFKRd@v\\^Sf@zIl\x83@eZATKN[d_JUZU\x9ailACU\x98I`UKS[WRaVAbPXApMla@]da|]hedC\x9cb\xb0NfOxeZGb@dJfUfK`@AC\x8dk[[iTYCQ[U\x83Ze\x87C_KiYO@a_\x85GuY\x87SeG@TSJeSw@CLcZ\x87F}J_OyCcFFXcFUI}H\x95EMSBYUQgOie\x99HGU]DYPmEMI\x85FGM\x7fENM_]LaMeji@Q`MGYRixHZUBWRI\\_fWN[VKRcXS^I^RnLREAaaMIM]ICgH]fi\xa4\x8bwBMH\x7fQCaO@@_\\M\\crYNS^MfadCVMhMII@]\x81U[F\x8fIfK\x84uDO_KSQbc\\DVIA[PU\\BZ]WS{EqUQeNQbMrB@e_S@UwIIM\x87_WBkGGO~SFWUasDgA\x89ByQ\xa7E_FoE\xb7F\xb3QNaWCQS\x85KSH_@[Otm@MhF@Q\\A@SnJLQoIMKImtIVQBageWCa_eCMQXQQGIiTUBWMK\\]\x8aSD_Xav]FYOMLoXMR]XIsEEQ\x87STU_ILgrGKmiHQT_PU@SUiKWK[CUH_KQF]boRkFkPsKyDFsU]@I_QS_oIUBQUBU_BkQeCWYaLUT_KU[NIW_uA]WaGsLWC@S]IK`aOIMiASQuYqM]Y[EF`mbOT\x81GcBA[ROEOT[YBYV@h_NmBOEPeWBuGWWiKKDqKd_NWheRNj@Me\x85W\xaf^aDwJIT}Dg\\YCQNO^fDNP]FGNbZHP\\GfPfF\\P]xBZ`XePihQ\\YRNLbCTLH^MJ\x84HidCXjD^SpKJZOPgLWZYJ@ZUJaB\x91IYXaFaY_@WJKNP\\ELiCkQYFsG{@WHH^fXU\\XNFR[bLT]LENRJ@RZAXNFP\x8alWHOdZTBNOVjRJVmK\x85@SH\x7fJqGR\x86[lkNaG_LMRBlXBgj\xa1GUUiHDLWRNT\\LcLZPE`WPI\\FZZZW\\mLe\\lR@VWT\x7fDIGkFaLEPkKyWMHNXK\\JReltQl@FXC`SPtJ^VkHeX}HCH}JHR[PpREPNXGJ\x8ctDP\x82K\x92\x86F^fZJZCRaFHT_PNZpZR`kDaXMC\x89J]iU@_m\x85MVKSc[AGMYG]]\x8dJWSuAIK\xc5T\x93UkZUQQFLXMXZN@N[XNbCbSTH\\GPwRg^ā\x81\x91TOJkW{U@aG[s[]C[J_KqCYT_DUEWLYERUBS^O@OSWXKhE^M\x8aONK\x94_Z\x81LYVCYkPsOSTUQGD]QGE]DO\\M\x86IdKYKYYkUc@\x8baUSL]kMaDQRiJoBQKeNMRcCIW_BWQwaYmaCcHuEQI}UGNsHeIyAAGsQY[\xa1VaLJL\x81tVP\xb8\\\\V\x88@G\x9clFgZ\x7fIWJ{BsZCpjXDfKRP\\ZA^PmZE`bH\x94C\x81xQHJZSNMV_B{^mEwQ\x87F\xe9zUBU\x82grsBuTwNYS[eM]\x84UAMeUEQS_aUsBqQs[\x95[Wg\x91I_QQW_K{Eg_\xc7@\xd9D\x85Ime\x83Ao^]lA\\blZt`\\@lYtqJYhULK`Wja@_kgQ\xe3bOP\xe1@mJyZuRP\x88q\x82\x88IV^pGbJ\xa1rPvWVvhvD`L\x90IbHVElHtAbILMjCxHNH\x8eQ|I\\XT\xeeN\xe6jzIXb\\\xde\xe0z\xb8HV[\xd0F\x82gPGbVTB\\Z^pHePRT@bITGfh^RhAZMJXPTvaF\xc1HģASHkCYL]bCZZ\\GRLdCh^\x9aARpnEXZDdVjWJLnBZVaVUXkXFRn^tXhj`HRT\x92bpZ\x92LHH\xccP\x8aI\x9aD\xa4C\x80W\x8cHhN^A^LxF\xd8^hI\x8cF\x86P\x84D\xeaL\xa8A\xa4IfIBMQ_Ji`mzLZG|{R_vHNa_IHQrwWWNUQM\xa9WwAYHEYHaT[vejNbBfM\x94\x81NU\x90ItP\\R`bAT^TLrA\x94aT\x85M\x85DX\xbcRVpZGH\x88RfAjMnk`[^K\x8eMzS\xa6AlUdIDUkOy_iq@wCuL[BqP\x7fE[OWD{O\x85S_JINkGGPU\xa0k\xa4_\x84GPOF]PU^UJ]bMKMVQnEVOCoFMlWXNlN\\O\x80QZSbE\x9eLXUhCjDDXPLtRRN[bInbZ]DKVUJ\x8aTulaJgOOW]D\x89CQTWL[^\x91CWE]PeC[byHYIwCEJ{`gIaQWRBNdZiJqS[PUBYZyAGRDn`VDtZfF\x82Y`IfD\x90MtFvpN\x8aN\\HdGhFbPBLnTU\\CTNLARYLWnl`JRiFYCgSOF\xa5V_A\x89\xaa@\x8c\xbcĀAhRPJZd^^dtl\xb2T\\ABSfKFM\\GLMdK\x80]jI|CRFrG\x86AzBhJ\xa0LdG\x8aT`P\x98V\xdcF\xa8G\x9eI\x8aifYbo|\x87VK^ali\x84cvc^Wd\x7ft\x7fjOb[bQvGpURL"], ["@@\x84EEYcA\x9bFQHxT\\@"], ["@@ZIN][KCVeR^L"], ["@@YY[F@Z^T\\H\x94B\x94A\x8c@QMgM\xa9M\x93H"], ["@@c\\hL\x92A\xacOdIIKuNgCgB}PW["], ["@@OEeHNV~IUM"], ["@@GL^P`BfM_GOOkH"], ["@@{S[PP`^V\xf4H\xb8A@UeC\x81F\x91ImFYM@Q"]],
                encodeOffsets: [[[8713, 54633]], [[6822, 54866]], [[7008, 54927]], [[7200, 54975]], [[9706, 54987]], [[7351, 54991]], [[7057, 54927]], [[9881, 54862]], [[7579, 55026]], [[8196, 55067]], [[7881, 55055]], [[8055, 55066]], [[8571, 55119]], [[8330, 55006]], [[7684, 55021]]]
            }
        }, {
            type: "Feature",
            properties: {name: "梅克伦堡-前波美拉尼亚"},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@pL\x84AJMGY]IDaMCam[JFXElYMGy\x7f\\_AIhJJrV\x80T"], ["@@g[GQRKFiEYkJ\xd3GiDWHsK_JsIugk@UGOdcJWQS]oGyDcReAILbbZCxL\\@\x80\\^fKv[diRGLHZZXp@XFfG@cNGkSJq^dKH\x82NbOAKnQDVPZJ^AfQ^aLcMEdK^eRGL\xadJG_PQ]e[QgAmK@RVRNl[JSKwKSKQW\x7fAMPT`dNENTNFZPLJfQVYBgp[@M^BVdXvF`IZsdih_lYhO\x92[lE\xaac~mĂ\xad\x94ynWnO"], ["@@oHDNlU"], ["@@]JlNpIGUuH"], ["@@xP\x9cj\xaaf\xbeT\xb0G|JZCNWZUlM\x84B]WGm\\]hI\\B|ZRZVBZ]^OrH^ECY\x86_pTdbJ\\C\\QLx^MPfn\x86ZzP\\^G`xL^PD\\[ZSM_EUYOCwiQdhbXJhDzR\xc6\x98dF\x92@vB\x86OjC\x8c@\xa2R\x9aVpF\x9aVdC\x94FjP`QvXlbzz\x96h\xd8t\x90f^Z\x96\xa6V`\x80`~|R`j\x82lbTaZQjK\xb0I\x98MĢA`A\xce@\xc4JASTMeQyGyJgBgIYQUPeB]EiFUZWCgHoSM[UDYXoIKMqEUID]wBoQKMsR\x97A\x7fQGKFuYGyw]BMSRW`UY]\x80Y\x88KdD@N\x87JUfX\\^L\x98PDLO^LLf@\x8cPNZ\\PeNjNrEIWh@R\\fB\x9e`OT\\VTCxHHMA_Na`APPVO`D`NfQXg\x80@bV`HLhTPFRlT\x8aLXJxJJRfFbOAOUEASJ]XKVUpHfY_mXuraOYJ[nS\x80AiU\x9ePz_BQ\x98@vKVSRib]HM^ASW`IpPdDbKFMsUBQnLhQ^cASdk\x82OXN[TSf`L\x8cL\x9eB\xa2RnV\xa8jjOkKBQjGbQZ@`Q\\cpKJMQO@WSWWKXSs_CSPY\x80aZ@jSrkB[t@\\OHM`][UeCeQWUIUmA@WeKPIJ[~DpYFWXIXU`FPQ^M\x84eXA\xc2ab@lS\x94OjJl@ZMPDx\\`VrIXOLSig\x81UAQxKnH`_EQQKZQAqx_LAI\x8dD]WWHSTM@WVkrON\x8d\\AEqJo`iLeI_`MNcY@eKGMqEIG\x81D[s\x91SHceE\x89CWPYCsP\x8dOqBZpp`\x86d\x8crrtZxKhJPcX[QgEgD\x89b]B_gW@YOsCMFG\\\x8fBIJ\x8fI_ByQ_T^^@R\x95dTXWLL\\}VsNsr[JOiBa^G`QfEMOgYcG\xb3R]CgY{UUYWDKMD_QU\xadKYOWANYYmcHS_RAKYJe[AuwoEOT]AcySKM]YKihS`oI\x8fPiU{YS\x7fQSuJY\\M^gBuKIMaFYIFig@[_i@\x87_DO]KkEa@CNeH\x82ZGNwBEWcFGLiCo]gR]ZOG\x81EoMgFEJgJTLRb\x87@MD\x9dL@ZIV\x8dBkS\xb3dgDyCEM\x83BeK]ZIXwHOPLPKPwHYN\x93VAH}@mEkb[bSIkBGUeGWTIZUEMUsDCMsFGpuEJc_GqYLUDcIIa@IKoHgo\xa1B]CMOgSGM_F\xa5DPMZC^UOO\xb5BcOiCC^W@[XSC{DOIqFYWYCc[oAWIPKEcZ]aiHUOQ[Is@uFoXkGaJQIcHCWR[[GqJkGkLeEaLa@kboNWBaOUBQb\\XLT_V\x97JDVkB\x99jYVIVc`M\\SLYB@fk\x84yJe@]Tu[c@LQaEiYaIKN\x81DsXY^eBYdqXqC\xa3FoEUIH\\fX@pNvVbbL\x94MRphCLJ\x86JbRR`pL\\CIh\\RO\\DVGPdBVU\x9cP`AXXGVV\x88ndDXQ@Gt[FMZ\x85L[GoBOJeJc`DTuToBCV^bGJLbKHGd_^BfrlZ@dJJNxXZ@@PvRVVTMbGSUXK|N`LcR\x9dPDVZTKT"], ["@@TPTArX\\SN_OMcK\xe7^TdCXYGFO{@_KoNMNoHaAGVPR_DQG]DoQ@`z\\kF]ZcLAVPXBXZPlD`GrHJI\x82AFPnFEL_AWXPZcHO`}KSD]IORTJVhlD\\H~FLTbDCX{DD`MNkM}HY~VPhF\xaaL`ClQT@HUEUlMFTOLFRUVbX\x80VTPbEU]a]dG@Oa]v@h\\WRqJnVH]\\K\\WNUM_NOvKN[\x84T`If\x8aKbYbWJ\x91AkdwFWRA\\Wf_AQYgMJU_EUMeEUK\x85E\\ztrLXAdIHkIgS]UVmQW[C\x83keKJ`xPh\\ZdQpXXbT\x96`\xa6D\x8eP\x82AjFROK[WMwI__JmZaZUxYtGTJ\\CtB\x8eN\x98H\x9cBvSf[GSJSEUSU}SyWYWkSMWHaZijifS\xa4D\x80iJUZUfWHSUOGUOEOgTm_IBXS`SIiBYGSR^PpJ``wJX`SJqC\x8deU^ULgBkY\xa3FIG{OO]aEaK]WASUOy@@KiCLMFa"], ["@@FYWMyCGQYBYQUB_MSPTR\\fdX~FPOpD"], ["@@VfLfElfX^F`CcWW_SOLIFsWOWCOQMcKKF__KLff\x90"]],
                encodeOffsets: [[[11710, 55315]], [[14569, 55224]], [[13745, 55470]], [[12999, 55725]], [[11166, 55252]], [[13681, 55549]], [[13542, 55795]], [[13399, 55841]]]
            }
        }, {
            type: "Feature", properties: {name: "北莱茵-威斯特法伦"}, geometry: {
                type: "MultiPolygon",
                coordinates: [["@@\x84Bnf\x86J\xdaC\xc8@h`|F`LRX`R\x92JXh\x96\\t\\rRtAbVT`FRfVBN\x83VN^\\fZTxMvStAhqV\x81VA\xeay\x88ExRnF|]`ANUTMIYRG\x82w\x93DaGF_nY]OYBO[LQCeiWDotY|AXI\x80JhYkEH\x9b\x87@[U\xb7[UO\x82sIKbK\xa2UZ\\tRBHzBfJtGHM~VRJvFdGbDZnxbXR`AJXdDNQfMRLpAjIRQbClNK^VT\x8cbd@lVZZZLcL\x85J[NCPF^RHC^RHSVPTOtZlUDKZY\x82\x93`ML\x89P]NgFWLTX@P]PATQVZFXKVF`CZSrD`L\\I^Dt\\H\\@b|VlXPI\x92SĂ\x82h]xQHOG[TSDaMa\\W@MYMNWKWREVRlY\x94V\xc6SJLvBXT\x8eI^^ZHHN\\BTdUL\x86N`nV@^j\x8aINDbWlCQ_oYMY`OGSbEDQIYeYE]\x91\x85\x81LCO\x8bsHIMWFOoQ\\OGQ~IDG~GfWlG]UsITOD_EWk@sRfkIQL[MWNGzXlLFObKlEJH\x80CXS@UkQf[nKX[YYEYJ[XOF_YOdK[KMSXQCKjGVV\xa2HhiWAAkNQ`KbHlM\\kQ\x85rH\x80ITG\x86@nLIUiQPUAMYSPcXG\x89kEOWMYB@QQIFM^KKS\\aEQWMV[eWG]XG|@tHJKYSYIkEwA\x85UfcZEGSaOYaWMY_J]OUuDg_iAaOOQAk\x7fNSE_g[C[J{GcNBVQJ^n@N_R\x8bCaV}A\xa1UeMsISMFUhYPYE_`B\\EMeDYGOmHu@\x89_\x87V_D\x81I[OwK{LqMLMSOYCK]aHaMEQQCISecgUSSr[HS\\OZ@^NFP\xacN^LtBJSRCO[VcFYxScU@aNIka\x93oEQhUNQ\x85CuW\xb3N\x89@[DQOYDkWMMJOjQom`FhsaOkYEM\x91sJ_YSTi\x81M\x8fiC_[CKW}FaG]FSNGVi@WUaQWW\x97mms\x8d]Pk`IH[RGFQ_m@OQSSBMUudqD]UkDJ^KbWLqjYHibApLHFfQp}HgGWHqv\xabPJtbbKL_AaReHaYuSK]`IMWJOQ[bSO[kHMH_UAM[O\x8bQbMGMNQoSHW\x9bEgEQULIESWG{R}YgGmWc@eEKKcBYNOEu@[c\\]EU[MBagK\x81GOKwK\xad@KpSASYAW_KCKcDM]YD_TcmWGcNMRaDgY][cW]BMQg@GLkEQKPkiMQJ]CCQXKT[OONKCWQO[AYS[@]PwPK`KH\x81MQSJoiUDI\x90]KaQO^mdICK{EcMiAoQ[DQZgZWGDUOQ[E]PJ\\EPaNGN\x83WUO_C[DsWieqLD^qXMO]ZNJSRyILM\\\x81bm]BDXSVyZQZcR\\VZfEVVhK`QCkPG\\JR\x83dWGwNQKSJkKOHs|BPTPFPHDF@HCJBRTJZ@PFJNPANhZLZMVABCBC@C@WCI@GFEDCDEBC@EAAAIMaAcB@XRJEPwCQZYL@PifQ^aBsCmJQKONNfgPETPZeLgZYHVZdSlZBLS\\FZ\x8eLdIF\\VXCNW\\PbTP\x89T\x8dPExXfSF\x83C_EYTkE{WWLVND`SRaNIVHPW^jBv^JEP_X[`D^PDbxpXNtJn\\FL`F``~NLH\x88PZL\x89^\x96Z_R\x89UeUyCSXI\x8cfF[hZJ\x90xJV`Zr\x80fLDH\x8ajW|ZTkBR\x86@XLTFhUb@lY^mVizu^QV}\\FbLDTnPR_J]A\xa7ZMLD\\KbbJ[Z\x99\\yAIT\x90dQPLR_NNPmZDN[NfZrK\\DxZNEhTR\\z]hE\x8aEfIE\\HPmPM`yT\xa2T\x84YQK\\WhMfFtCjLjSL_ZFzAVGLWrCfIG^LRiTHZjG`KHIhLZU\x86NFLpNxXHI|Z\xacV\x8aVfA|e\x82b`HrfJp^J^BHLKp_J\xb5~\x8fXuA@ZPd\x92J^VKPZLFh\xc0@\x84DbXTpp^LN\x92HnrN`PL^D`GjFlNJN"], ["@@^T\\HbXLR`EAGAKIYMEAIGCGBG@GAEQSKCIcLG^"], ["@@jG`AdBHBDDFLF@FADEHCDCD@JALDJBD@F@DCNU\x8fGcL\x85@aX"], ["@@vDKWiT"]],
                encodeOffsets: [[[7236, 53496]], [[6323, 51770]], [[6315, 51860]], [[6315, 51878]]]
            }
        }, {
            type: "Feature", properties: {name: "莱茵兰-普法尔茨"}, geometry: {
                type: "Polygon",
                coordinates: ["@@^Aan[\x82KNzJTQMI^YNPrWC]rKjftX\\C`DVP\x84XHMbMFOI[^O\\FPRCVXHhYRY\\CpRjBdN|FDLcJ]nRPLb\x8f^CJjVIpRT\x82NLGL_xO^O\\@ZT\\BRPDXMLPPS\\WLDR^DRIjNOlRLlFHKh@NR^AdX^\\hZbCNQdMXHdn`SZCN^dCDL`LBXTZTBLo\xae@xLPL\x82HhLAb\\NFV[^\\dv@PFZMdALLfFd@nXhH~Z|QXHFTKJRVhF\x9cFGXpTMRHNaN\x8cR\\PBN`VNGlGP\\aTR\\IPNX_JL^vTbZfGbQ`BLKaaIs\xacOruXGhH~GRoEeKGBojaZGriXKLaI]lC^VrCvcYUEcba^SCWUWhKHQg\x87JKoMQWcJcAGXmJ[ICKe[aOSUNYUUNKDSpgUOSAMWC[OIb[\x84BKeh@hQhsHavSIW`QJ]AS]_\x81LiNeESQZahWaKMYmFUV_A]KcCCK\x7fM[KFQuYDYnU\\SRCO[Jy[ZYNaO}\\m{PYOIyF\x7fuPMzYrcdMRONsXQ\xb8D\x8aJ\x84V\x84\\\x8cFlL\x84Z\xb2V\xa6ITGxcd_dSrgT_BOXqCQWeBQZ_jGTWMaBQxwPgPOhGpHVCBUgYgkeMqG\x83]M_^kX\x81PQncVcBOQYF[LOh\xa1daAY]ICSRI\xa2CRQUkAU\x7f]AUNE|`@aMYcaiWG[lO^SM[sSic\x85]]ahOMY[QGYWaFiY\xa1QW\x83wWcOwUe[U\x93kSToQGRsFcCkL\x91LkPiduHULcJgCSb_HIP[FQ]W@mLi_[DEN\x87ZGJcLKOWCOQ\x8bA\x89XGQcG\x97TAdUDgR\x7fGkPeT[pSD_h`RSHC^uCOIePAZ\xd7UFU]AUZIVcJqdNb]NBL^TPRVMbbLTIN\x84@\\ZM\\^PSLflYPXLkT]CFT[LqA\x91VL`KVeRWAUXD\\\x88P^VFNQR]FJ^IJJVjTQJmNAjYd\x87U[BEVmA_V@^uDIKmA[HaAQZif\x7fR_UqB[JqQAT_GJMUKiIkAKImEY]SMiRYGme[CaSgBiKOWWKIZgKYD\x87QQOBSgAij]C_HaUQN[IWD[VqAgNWI[HUA]HBPkV@LnJMVTR^Dnhd\x8c[FLR^PXXjNzhIbAhdRQZPRSRZJGR\x7fPYRcUoAKLyN\x83zoGKS]LFP_fSG_ZiF_\\WJM\x8cmdWBy^J\\WFWXFPUTPN_LHVQV[TTZCh^lJl`NMfQNlHBLnBLTKHBVM\\ChhBVZZNvL\\LhC\\ZOLBTRHDVZDf\\NO\x8aIXTpD"],
                encodeOffsets: [[6560, 51532]]
            }
        }, {
            type: "Feature",
            properties: {name: "萨尔"},
            geometry: {
                type: "Polygon",
                coordinates: ["@@^GVB\\GXJhMrB\\UXC\\JRMbV`G^DjihBATRP\x88RZChLJYXLPXjLhAbT\\DnfZHjQTNZ^nFLJlBjJVLIN`HBSrR\\IrA`V\x80QjeRYbB\\GnBJLvC@]`UnBFU\\A\x88VZcBinMRIiSIUJII]^ERQEM]U\x87OC[VWXBfQLUK_\x92UrB\\KES^DlSWKZOekTK]ON[[Y\x83@JMKSaaUNOQ]SAK^MMarcdIJUVY^BKIAY\x81B_O_g_ABNcAkP\xa1QURmGGGqLQ\\gEGJTNWJiMRe_IMU]COLFd_jGZNn\x89Fo^_Mg\\CLg@MMeMgL]RkS\\U@SV[cKFaYK\xafd_GsAeXQZjdY`oKORFLKXLL_T]HNTKV\x8blS@sfLPaJUXGT\x82FCZMXUN[CUL]^^`cVS@s`YBq\\kBYVqW{AOJDhA^WvJNf^"],
                encodeOffsets: [[6533, 50741]]
            }
        }, {
            type: "Feature", properties: {name: "萨克森"}, geometry: {
                type: "Polygon",
                coordinates: ["@@KPu@iHUNFTZHDRaLuFDh\\XDVqD]GAR\\DFXXTSnEl_BI\x88UAC`OXfBLNnFGpOpODFVIjbFIbwH@dQPTN^DF\\vFDZUV@pP@RTjLD\\ZLPM\x80BzPLRrHJLhGdFvI\\BdxfMpDJMfVPEzC^Jjb`MNNnDCUvHPTRBBVhhjB|K\\KnGjf^DrRZRdWF_\\B`LCYRKtHVIZHnFK\\|H`IRWIOPOxV\x80\x7fFM\x88RreV@NOiiLO\\ItALkTWL]GWikBOfUBMWYaK@KzDCYdk\x92@DLhCJXpNDJdHKV\x9eMfXZVVY`KPO\x80GCS\xb4QJevKhLbEX[\x98@lDLJ\\OPLbQh@XGbVlUHPnHbElZlAjMdFNJ\x82NlPVECe~EEZRFJTbC@ZdT@ldLULFRm^LJ\x86ObN[TlVH`PNvAK\\NP\x90E\x9eAPK\x96@\xaa[J_^TCP`B\x80hnGnL`@FZ\xa4FbIrLHT`FPR\x80UFSVWvJt@TEZNRdTBQjZAj]EM_WJO\\KEQP[~O\x80A\\QlIh]\\BPK^FVKpBLSlAP[daO_BSQKTOKODO^WIWHm^cbQF[jMJ\x89]OHaUMDK[}HO_iPYSONigYLOK_BO_oBG_O@WOGKi_QAo_CSmHQKK[CU__MMSo[GMPUEUWOUyWBiGgRkKKTWPeC{XYA{RBN^pDRbREtkKW@\x83UeHINXZTJHRVVFrcNENeNsGHRYNwFTja@BgeFQTW@\x85aU@sTATiNuKg`]@W_WiDI]KDOQQHK\x82OdNdEES[@UM^IKK`IZ@\x86WZFVIJY_MDa[EaFQM{G]I_DML_FoQWc\x81c\x81GoMUK\x99QSMAM\x8fCII\x7fRYLgQaGBKaWk@[JGSY[\\gIQeIQJU[{IkR\x8d@UFcQYNYOOQ]By\\kCeODKoK\x95H_EgU^UHY}kVO@OwOIQ_OW[qRW@[LSdYPgFBYM[}KEK]IFkmCOE[d}C]]FI]SLKi\x85YK@YaAqLUEWZy]cE{B[TWEBOQ[GuJMKQoWOWoMyCmVcN\xd5|GQ_WOV\xb9cIUm[EQ\x85dOGeC_LUA]Qm@mO\x9dComAYJKQQ]PwYI]\x8fK@[JOQUoIUUSiNQOOaEQu^_QKE[\x7fDKX]V\\NKTVPeXOAy^XR^HWX\x91AWFB^OLJ\\YJCT\x8d@mMoFSP\xa3NSEIX]J\x85F@hLNCVe\\iZDHuPJPqFI^rJHHhLF^XAJV\x81lFV\x81I[B]nZZ\x8eLTVQbVD\xaepSVZFfVTW]Ub]\\G@Ye[bavBbLBfnF`YXP\\CbDCR_AmHEV\x82PFTIVhJpOZZNB|QPLlCCXbBfPJTfhMHaAqFWRMl\\RMVyGONDd`PhIhZHbaCeBBVUTdF\x80V`G\x92JD^`PlHj@\\UdFVZINLL^FIT\x80Zh@EXbHXQrL^I\x88J~@BLZPqpW\x92aTqMYRYHYCEdHTiA]VDjSXwCgZsDWEwNSK]FI^oRaScB[E"],
                encodeOffsets: [[12580, 52318]]
            }
        }, {
            type: "Feature", properties: {name: "萨克森-安哈尔特"}, geometry: {
                type: "Polygon",
                coordinates: ["@@\x82LVG_obQ|HXQ@[XQP@~VzITOV[|KdBhOEUeWEORQ\x98El]\x84AbG\x82WvT^D\x94@bCHQ\x8eC\\SSW\xa4VjZl_hCCOZ\x83Z[SQCScHMaQAGgTCHUYKKWBUhQMGVcVUIWE}\x83UiJOEHm@aPKm_MaQMBM|R`MkaFOXQ\x92DLLPdnKB[PET]jR`KGUbMQSAS[cYIFMcUxM@UUQ^OIOcKriekIAisWkDYQY\xa0iYWeAYIJKUSDSa@W_dOEI\\ebKNSPgR@~UbubOXY|EPO|apCVbjAH]hUvERUBQ\xc0EZ@CT\x80FFZPLbATQ\\@\x86]vCjU@U\x8cE~JLODq\x8a@POhHDP\x98GIYjCEg^F\xb6EOS@g\x8cETJ\\AjH\\LbSDYwCHWZk\\SRYGIDk[SFMVIMSXG\\SP_iDYMPgMI\u0115\x8dwUOPJPQX_J{GL[mEYGUJsGQLDZ_K[AE`cXYQqQ]CiemH[L{LiAggAUQAOSuGDVmCMM_Nia]IyDOFeUINoCeNcw[AuJcEgHIKqGKQyO\x7fAONYKC[iKQSO@@oVUCYuEE[]CSMRO@cxGJaaEJiEUPCPoHomEKMeAPWD_VBJ\x87`AFkTmWSEW[CBQ^HrCCU[WCgvEbKCQYGESVMjGv@LOIWk[DYSQVMXF\\CP[EKc_QWsaI[NI][[IClYE_hiSwKEJ\x7fR[D\x83OeHkG@\\cVmCFt\x85`sKOfqXW@UI\x81BqKQHmFGOWEOLBR\x7f\\gCCfKTyXiBiKuX}FKM]@CSqF\x87EmVD^[hjBNTKHI\x80WDUP@LcHiQa@@\\uHXZJVjCNGdb~lCThROTmZSDWVNX{DQlJPEV\x9d@_LSh\xa1Qk@GJe@KPwIIK[H\x83EqRcH\x7fXcB\x7fUcCONgFWLJTAbO^TT\x7fjOdNj\x87PQLHTKXWFXfTGtERVqRg@\x87lsA]ME^{DoPYOYH\x89GWJQ^WNKpPNEZu^WbC`\x89T[^NLAXSVJjRHWRNRfDb`XDhfAbURsJJnNLpJKRmI@T[B@RgE@Nsn\\P`@TG\x86LRTXDMb\xb4R\xb8EpF`E\xa8FzR\x8aAhBtCVbEX}THPlHXA\x88`JNxJ@V`T@fqAaNMRRfrV|FXTY^[AOVB\\UJ[CadTR`LCP\x83veL\x90J\\E\x82V@^JJgNUNcDeb]NMTqZ[d[N@`P@Db\x80RNGxA\xa3\x8cejG^Dh^JJNbNBbQFmK]Q]JWTQdULM\\eX[`QJAXYVwGQjHZ_N@RijNfKb`^MN\x80FHN\x86ENJnFZO^CHV\x9aGjfhPVRAZNT\x96F~GVJdEEWdEzD`P~I\x88EdYDKx@fTTI@SfH\x88TvZ\x86Hb`P@jZ`L\x88DYfV\x84R\\ZDjS\\\\\x8elBD"],
                encodeOffsets: [[11877, 54309]]
            }
        }, {
            type: "Feature",
            properties: {name: "石勒苏益格-荷尔斯泰因"},
            geometry: {
                type: "MultiPolygon",
                coordinates: [["@@\\[b@s_mJiTM\\BdJPbHHefS"], ["@@{@kGW\\[COMPU\x9bBMAuP@XNVIV\x83TsKcQWHIPL\x82hzZVn^\\If@\x8cM~CpMNK\x82I^UXmn]FSh_HWTS@O\x81F}N"], ["@@@MmMYLJJD\x80XN`KEqHI"], ["@@wNfHhKUI"], ["@@D_f]MMibCTRV"], ["@@]jQr`QRaFWGO"], ["@@c[\x91KSDudIlTJzB\\RpFnTjCAce{"], ["@@LSYSCU\x9eOdQ_K{MWLTVaHSNUUuQ@OY@wWIMcIY@qkAe`]HcLGKaHI]aDUpAvSCSd_fIPIpA\\H\x86KNY\\EHsR@CWmcU\x87HUWW_B\x9bOUVcAHOCUP[[QJg[DoKQ_aQ\x85IKIgDQo\x93NaKUaMu@oeWG[[G[DSN\x83DyH\x81ZkL\xa1jiX\x9f@gPbbsB}\\ERwTC\\eFJNQNq@wT@POLIXTNWRJ\\ZJ~DB^O\\|\\OTiDRRulaD[LbZC`fNLEV^KP[N\x9feIK\x8fNW[AwcCOJ\x99ASWBWISiBiHoD]CMa\x8d{QS[CEMWGuXW`_HURMWDSiiFIMguByLwV@X\x8bTqXyTEJ`Tc\\IXJT\x83\x9a\x81Z}NwdK^_hBNQfW^UNsP_\\\x8bd\x8bP_J\x8bN\x7f@\xa9A\x89B\x9dXwCCE\x81IcF\xb3\x8a}\x8cAPgl_XW`RXXJzJ\x86EtQ|FVPHVI\\{nk\x90iJ_C\x7fYeTa\\QnURJdPZ`RLjKJRb@b[bQD}SkDCLi@OH{GiUKW\x8dFmj[JUS]VCTHnL\\\\bZIBS`KX@\\TtRUViN_KGX\\DFPjVvE\x94B\xd0VlAlK\x92RrV\x8c|XNVApJHbXLIXURS`Y@]O@MW[UKkimK\xaf@]DiPX`YVPNjH\x8cjLjMb^tOX\xabC`\\@T_XBLSX[PoNq\\CdOTkLWTgJ^TATWhcneLMZ\x97\x82E`HXOXaJ\xc3CaCiOkY\x83KOMeBuXW`}EKWsMQwLS@[OaT[Oa[IF\xbeL\xc4R~z\xa2fp\x92\xb8^^lJnOiEwCHSnAfesQcEu]cmRQCsDmPU\\Q\x90YZC\xb0@`JTD\xe6HxN^RCRpEx@\x94_xHlGnX\x8cBZQ\x8eLJD\xb2C\x8aU~K^OfM\x98AjFt@hE\xeeiHKSQ`shD\xd4Q^X\\JZhzFVg^[`CLV\\Hr@jdLCdXvNRRVDHTpC[MUaHUTQh@~UPF\xa6]\xa8OXKl@NU\x88ubGlCRXdVJn\xa8cjmHkReRM\x86eHMK\x9dFgISE\x7fBwUKS_kcmU\xa9]ySiGkFPgfQ\x9cHjTzJ\x82DdJ\xdePrFjBxS\x88gsgDQb_JQE[[B_KAQem\\QFM_aV@dRP\x80dLAJ\\bBPfbfH\x98F\\\\rF`C\xa8S\xb0o\x90Y\xaeQ\x84UxK\x8c_ZavSNU|IrH`EpFlN|\\\x9az\x8aVlZhF\xa2IPMnI\xa6XZXZFhCPOIU\x99iUJYK\\QH\x8bPuCwR\x7fFmoKsc\x85Y\xbdqskiY_WoOOH\x83BkNAUQS\x85eKQ@UXcpmdKNHzGx@dY@ihC"], ["@@jBVckCYRoLHNnE"], ["@@bIeMQJVN"], ["@@C][O\x99KeBmM]ScPTV\\A\xa4N\x8cPpX"], ["@@UINYuGk^\x9b\x88MXbdvF\\[VuhUJUXB"], ["@@\x93XB^\\d`R\x98LdC\x86LZ@\x84IfQCaZMYKSUDSQUqC_F\x97CmLUN[@"]],
                encodeOffsets: [[[8701, 55755]], [[11520, 55718]], [[8703, 55822]], [[9029, 55854]], [[9774, 54951]], [[9756, 54953]], [[8896, 55817]], [[11166, 55252]], [[8745, 55886]], [[8931, 55951]], [[8871, 55974]], [[8599, 55941]], [[8641, 56006]]]
            }
        }, {
            type: "Feature", properties: {name: "图林根"}, geometry: {
                type: "Polygon",
                coordinates: ["@@\\F^ZrNvZTRjBJNbPL_^J@TXDtKbH^XvBX`MJV\\`LVSbKXZfDlR`AAVRVVApJT``R@JV^EtzCtLlOlEpQ^aRE`LVG\\DXLjLTVV@`ORSjGLnqHKh`JSV\x88TFRtF\x8aHZGZPpO|CF]^NtB\x88kh@rQQUsFSHWeXELWGSRK\x88OMiPc\x80iSSP]BaISXKhEPMdD\x80VdA\x80WdGrQ\x84F\\GJLxJLOf@HIl@\xa2RTg`K\x9e@FUIORk|CMWXUTCnYPSgQDS}kcaMHiDIUWYvG@[b@jRdG@KVOXCJ\x7fLGMSiA\\gC]nU\x88FrEDT^@LN~EvWjLjAzWLSDehD\x80[AQPKXFHPnERGrL\x82AVJX@rWPetL\x86_EsnDdU@[lHfG\x84P\\C\x80QFIxLjT`gZFDk\\J^\\MJJ\\tbRXd`FLO\\[DWEUNTRCZl\\JX\\FdAbTpQJ]^ETLxMXFtChYxDTWCi^UjBGSFcZDZGZQrNbSX\x91roYOAK}@\x87I]JqKWRaGFWg@\x7fYJS]EKKJMUYcE[Vi@kG_OC]\x91I_H\x7fUcEVSAUfAbDGagYgJ_OCcPMzHNU[QNkXQrEbBNGegISeOaADWkDOK{RMAYYoPgIJUES\x81OFUnG`BDQaC[DWO_ZmEAeaKuAabf\\@Z[Ha^^VSXeUYETU\xadoUCRaSU\x8dKYY^m\\A\x82JEU\x82kIUWBE]gKGGqIJ]rEIOaMkE_[YB\x83UATqd[@SM_Hy_iHUO}C\x9fK[VYHsMCQYI\x7fAE^\x91JV`M`}AUPiJFdOLP`GX^CNPc`\x87AcPoCGUc@Ika@sOmBQGCQTYQOdKHOB_UgVI^\x87cOV_]A@cH_WKJMBYYOoPu^OWCU]DVTsL[ACPUN@Xv\\BJofaTGPuAQ[Q@\x87MA^wJ[B@WWEi`ERmb\x8dOWReDOO}Lu[gJUYUAEOUIUJoBH]T@AUYKBWjMJDjcZGhBPG@UpEhOLIBWMSiKcDMX_EcOcBALaHIiHcMOyLSVsBAPmOsBWlVFerJbPHYdRn\x8fHUPHTUTSBUU\x83FHNMV]E]VE\\MLUOYC\x85LMTj^OJuH[niXJb_Tg@]F\x87dsCINHVSVWBIZsAQKcHYMeZ@P]AOUyaCKeWOCC`P\\\\VQJMZHV@\\W^j\\bONDBZMLKbgdcDWCeF]E[O[FYKJQbYQW]EeFQN\x91C@VNTKVFRXTX@^\\YLpfVbEbeHPT\\LZVURBNXPMPxbpIFLlERVWLGVLP\x82\\@N]LMbgNaFe]UPbXYPYOUj\x82KRJjQZLtEO|aRGbXfRD\x86CtI^LZEAQdMjHZAtXVbYLBNkVQB\x7fVZZO^tfFVmBWNYhfBnPdiViXNI\\NTSRNJ@RhRRX_BoL@JeZ[F]KKX[BcGMN\x83DIreNERXHDPgJUEsRkEY`ULYEQJTRKhadC\\JR"],
                encodeOffsets: [[10167, 52609]]
            }
        }], UTF8Encoding: !0
    });
}));

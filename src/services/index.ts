/*
 * @作者: 李洪文
 * @公司: 山东大学
 * @文件描述: 服务总封装
 * @LastEditors: Please set LastEditors
 * @Date: 2019-09-13 07:27:24
 * @LastEditTime: 2020-04-19 12:20:27
 */

import { PublicService } from './public.service';
import { AthleteService } from './athlete.service';
import {TeamService} from "./team.service";
import { LabService } from './lab.service';

export default {
  publicService: new PublicService(),
  athleteService: new AthleteService(),
  labService: new LabService(),
  teamService: new TeamService()
};

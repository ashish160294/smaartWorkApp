export class IRequest {
  username: string;
  email: number;
  manager: string;
  mobile: number;
  EmpId: number;
  desc: string;
  ApprovedBy: string;
  workingDate: Date;
  }
// {
    // "username": "Kapil",
    // "email": "romi@f.com",
    // "manager": "Aditi",
    // "mobile": "9876543212",
    // "EmpId": "234567",
    // "desc": "Aivayi",
    // "ApprovedBy": ""
    // }
//   UserName: req.body.username,
//   ReqDate: Date.now(),
//   WorkingDate: req.body.workingDate,
//   ReqStatus: req.body.status || 'pending',
//   trackingDetails: '',
//   Email: req.body.email,
//   Manager: req.body.manager,
//   Mobile: req.body.mobile,
//   EmpId: req.body.EmpId,
//   Desc: req.body.desc,
//   ApprovedBy: req.body.ApprovedBy || '';
//   }
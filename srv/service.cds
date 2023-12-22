using { SampleLiverpool as my } from '../db/schema';

@path : '/service/SampleLiverpool'
service SampleLiverpoolService
{
    entity Risks as
        projection on my.Risks;
}


